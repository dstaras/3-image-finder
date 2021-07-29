import React, { Component } from "react";
import styled from "./Searchbar.module.css";

class Searchbar extends Component {
  state = {
    value: "",
  };

  onInputChange(value) {
    this.setState({ value: value });
  }

  render() {
    return (
      <header className={styled.Searchbar}>
        <form
          className={styled.SearchForm}
          onSubmit={(e) => {
            e.preventDefault();
            this.props.onSubmit(this.state.value);
          }}
        >
          <button type="submit" className={styled.SearchFormButton}>
            <span className={styled.SearchFormButtonLabel}>Search</span>
          </button>

          <input
            className={styled.SearchFormInput}
            onChange={(e) => this.onInputChange(e.target.value)}
            value={this.state.value}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
