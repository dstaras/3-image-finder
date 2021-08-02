import React, { Component } from "react";
import axios from "axios";
import Searchbar from "./components/Searchbar/Searchbar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Modal from "./components/Modal/Modal";
import Button from "./components/Button/Button";
import Loader from "./components/Loader/Loader";
import "./App.css";

class App extends Component {
  state = {
    data: [],
    page: 1,
    query: "",
    showModal: false,
    activeImageId: 0,
    loading: false,
  };

  constructor(props) {
    super(props);
    this.galleryRef = React.createRef();
  }

  componentDidMount() {
    this.getImages();
  }

  getSnapshotBeforeUpdate() {
    if (this.galleryRef && this.galleryRef.current) {
      return (
        this.galleryRef.current.offsetTop +
        this.galleryRef.current.scrollHeight -
        70
      );
    }
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (
      this.state.data !== prevState.data &&
      this.state.page !== 1 &&
      snapshot
    ) {
      window.scrollTo({
        top: snapshot,
        behavior: "smooth",
      });
    }
  }

  getImages = async () => {
    try {
      this.setState({ loading: true });
      const response = await axios.get(
        `https://pixabay.com/api/?q=${this.state.query}&page=${this.state.page}&key=22389576-6dc946f066e9adfceedfbeb2d&image_type=photo&orientation=horizontal&per_page=12`
      );
      this.setState({
        data: [...this.state.data, ...response.data.hits],
        loading: false,
      });
    } catch (error) {
      console.log(error);
    }
  };

  searchImages = (keyword) => {
    if (keyword) {
      return this.setState(
        { query: keyword, data: [], page: 1 },
        this.getImages
      );
    }
  };

  loadMoreImages = () => {
    this.setState(({ page }) => ({ page: page + 1 }), this.getImages);
  };

  openModal = (id) => {
    this.setState({
      showModal: true,
      activeImageId: id,
    });
  };

  closeModal = (e) => {
    this.setState({
      showModal: false,
    });
  };

  render() {
    const { data, showModal, activeImageId, loading } = this.state;

    return (
      <>
        <Searchbar onSubmit={this.searchImages} />
        {data ? (
          <ImageGallery
            innerRef={this.galleryRef}
            images={data}
            onClick={this.openModal}
          />
        ) : null}
        {showModal && (
          <Modal
            images={data}
            imgId={activeImageId}
            closeModal={this.closeModal}
          />
        )}
        {loading ? <Loader /> : <Button onClick={this.loadMoreImages} />}
      </>
    );
  }
}

export default App;
