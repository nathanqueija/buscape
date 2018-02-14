export default () => {
  return (
    <div className="menu-button">
      <style jsx>
        {
          `
          .menu-button{
          box-sizing: border-box;
            display: grid;
            padding: 10px;
            grid-gap: 1px;
            align-content: center;
            cursor: pointer;
            min-height: 100%;
          }
          .menu-button > * {
            background: black;
            height: 5px;
            border-radius: 70px;
            margin-bottom: 4px;
          }
          `
        }
      </style>

      <div></div>
      <div></div>
      <div></div>
    </div>
  )
}