import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  html {
    overflow-y: scroll;
  }

  html, body {
    height: 100%;
    margin: 0;
    font-family: 'Tahoma', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: transparent;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;

    @media only screen and (max-width: 768px) {
      font-size: 14px;
	}
};

  .pagination {
    margin-left: 15%;
    margin-top: 20px;
    margin-bottom: 20px;
    padding: 0;
    display: flex;
    list-style-type: none;
    justify-content: center;

    .page-item {
    padding: 0 12px;
    height: 32px;
    text-align: center;
    margin: auto 4px;
    color: #000000de;
    display: flex;
    box-sizing: border-box;
    align-items: center;
    letter-spacing: 0.01071em;
    border-radius: 16px;
    line-height: 1.43;
    font-size: 13px;
    min-width: 32px;

    &:hover {
      background-color: #00000014;
      cursor: pointer;
    }

    &.active {
      background-color: #00000014;
    }

    &.disabled {
      pointer-events: none;

      &:hover {
        background-color: transparent;
        cursor: default;
      }
    }

    }

    .page-link {
      text-decoration: none;
      color: black;
    }

    @media only screen and (max-width: 768px) {
	  margin-left: 0
	}

  }

  .main {
    margin-left: 15%;

    @media only screen and (max-width: 1280px) {
      margin-left: 17%;
	}

    @media only screen and (max-width: 1024px) {
		margin-left: 20%;
	}

    @media only screen and (max-width: 768px) {
	  margin-left: 0
	}

  }

  .flex {
    display: flex;
    justify-content: space-between;
}

  .grid {
    display: grid;
    grid-template-columns: auto 400px;
    grid-column-gap: 40px;

    @media only screen and (max-width: 768px) {
		grid-template-columns: auto;
    row-gap: 20px;
	}

  }

  .content {
    margin-left: 60px;
    margin-right: 60px;
    margin-top: 60px;

    @media only screen and (max-width: 1280px) {
		margin-left: 30px;
    margin-right: 30px;
	}

  }

  .paddingBot {
    padding-bottom: 60px;
  }
`;
