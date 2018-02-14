export default () => {
  return(
    <div>
      <style jsx>
        {
          `
          .tag {
            display: inline-block;
            box-sizing: content-box;
            height: 10px;
            position: relative;
            content: "";
            cursor: pointer;
            margin: 0 13px 0 0;
            padding: 10px 20px 10px 8px;
            border: none;
            border-radius: 4px 1px 1px 4px;
            color: white;
            text-align: center;
            text-transform: uppercase;
            -o-text-overflow: ellipsis;
            text-overflow: ellipsis;
            background: #008CBA;
            top: 20px;
          }
          .tag h5 {
            font-size: 10px;
            font-weight: 300;
            color: #fff;
            margin-top: 0;
            min-width: 100%;
            text-align: center;
          }
          .tag:before {
            display: inline-block;
            box-sizing: content-box;
            z-index: 1;
            width: 22px;
            height: 21px;
            position: absolute;
            content: "";
            cursor: pointer;
            top: 5px;
            right: -10px;
            border: none;
            border-radius: 1px 1px 4px;
            color: #fff;
            -o-text-overflow: clip;
            text-overflow: clip;
            background: #008CBA;
            text-shadow: none;
            transform: rotateY(1deg) rotateZ(-45deg);
          }


          `
        }
      </style>
      <div className="tag">
        <h5>MELHOR PREÇO</h5>
      </div>
    </div>
  )
}