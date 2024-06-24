import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  margin: auto;
  height: 100vh;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Wrapper = styled.div`
  width: 320px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  .icon-hands {
    width: 148px;
    height: 154px;
    position: absolute;
    top: -240px;
    left: -80px;
    opacity: 0;
  }

  .icon-p,
  .icon-r,
  .icon-t,
  .icon-s,
  .icon-i,
  .icon-a2 {
    position: absolute;
    opacity: 0;
  }

  .icon-a1 {
    width: 20px;
    height: 24px;
    position: absolute;
    bottom: 150px;
    left: 171px;
    opacity: 0;
  }

  .icon-p {
    width: 55px;
    height: 61px;
    left: -14px;
    bottom: 0;
  }

  .icon-r {
    width: 20px;
    height: 24px;
    left: 96px;
    bottom: 0;
  }

  .icon-t {
    width: 20px;
    height: 24px;
    right: 55px;
    bottom: 0;
  }

  .icon-s {
    width: 20px;
    height: 24px;
    right: 11px;
    bottom: 0;
  }

  .icon-i {
    width: 20px;
    height: 24px;
    right: -7px;
    bottom: 0;
  }

  .icon-a2 {
    width: 20px;
    height: 24px;
    right: -37px;
    bottom: 0;
  }

  @media screen and (min-width: 768px) {
    .icon-hands {
      width: 198px;
      height: 206px;
      top: -268px;
      left: -126px;
    }

    .icon-a1 {
      width: 30px;
      height: 32px;
    }

    .icon-p {
      width: 73px;
      height: 81px;
      left: -40px;
    }

    .icon-r {
      width: 26px;
      height: 32px;
      left: 87px;
    }

    .icon-t {
      width: 24px;
      height: 32px;
      right: 38px;
    }

    .icon-s {
      width: 24px;
      height: 32px;
      right: -12px;
    }

    .icon-i {
      width: 7px;
      height: 32px;
      right: -22px;
    }

    .icon-a2 {
      width: 30px;
      height: 32px;
      right: -66px;
    }
  }

  @media screen and (min-width: 1440px) {
    .icon-hands {
      width: 397px;
      height: 413px;
      top: -380px;
      left: -291px;
    }

    .icon-a1 {
      width: 61px;
      height: 65px;
    }

    .icon-p {
      width: 146px;
      height: 162px;
      left: -146px;
    }

    .icon-r {
      width: 54px;
      height: 65px;
      left: 56px;
    }

    .icon-t {
      width: 48px;
      height: 65px;
      right: -23px;
    }

    .icon-s {
      width: 50px;
      height: 65px;
      right: -102px;
    }

    .icon-i {
      width: 14px;
      height: 65px;
      right: -123px;
    }

    .icon-a2 {
      width: 61px;
      height: 65px;
      right: -200px;
    }
  }
`;
