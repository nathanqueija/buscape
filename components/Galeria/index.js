import React, { Component } from 'react';


class Galeria extends Component{

  constructor(props){
    super(props);
    this.state = {
      currentImage: props.images[0]
    }

    this.onClickThumb = this.onClickThumb.bind(this);
  }

  onClickThumb(e){
    this.setState({currentImage: e.target.src});

    const children = e.target.parentElement.childNodes;

    children.forEach(
      function(currentValue, currentIndex) {
        currentValue.classList.remove("selected");
      }
    );

    e.target.classList.add("selected");

  }

  handleImageError(e){
    e.target.src = '/static/nao_disponivel.jpg';
  }

  render(){

    const {currentImage} = this.state;
    const {images} = this.props;

    return(
      <div className="galeria">
        <style jsx>
          {`

              @media (max-width: 774px) {
                    .galeria{
                         grid-template-columns: 100px 200px !important;
                    }
                }


                @media (max-width: 470px) {
                    .galeria{
                         grid-template-columns: 40px 1fr !important;
                    }

                    .thumbs{
                  grid-template-columns: 40px !important
                  }
                }

              .galeria{
              display: grid;
              grid-template-columns: 60px 1fr;
              grid-gap: 5px;
              }

              .thumbs{
                  background: white;
                  display: grid;
                  grid-template-columns: 60px;
                  grid-gap: 5px;


              }

              .thumbs img{
                border: 1px solid #dfdfdf;
                border-radius: 3px;
                max-width: 100%;
                padding: 3px;
                background: white;
                cursor: pointer;
                 box-sizing: border-box;
              }

              .selected{
                 border: 1px solid #ffcd00 !important;
              }

              .image{
              max-width: 100%;
              object-fit: contain;
              width: 100%;
              padding: 10px;
              background: white;
              box-sizing: border-box;
              align-self: center;
              }
            `}
        </style>
        <div className="thumbs">
          {images.map(image => <img key={image} className={image === currentImage ? 'selected' : ''} onError={this.handleImageError} onClick={this.onClickThumb} src={image} alt="Sample photo" />
          )}

        </div>
        <img className="image" src={currentImage} alt="Sample photo" />

      </div>
    )
  }
}

export default Galeria;