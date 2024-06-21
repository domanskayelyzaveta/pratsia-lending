import { ColorRing } from "react-loader-spinner";

const Loader = () => {
  return (
    <div
      style={{
        position: "fixed",
        zIndex: 9,
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "rgba(0, 0, 0, 0.1)",
      }}
    >
      <ColorRing
        visible={true}
        height="100"
        width="100"
        ariaLabel="color-ring-loading"
        wrapperStyle={{}}
        wrapperClass="color-ring-wrapper"
        colors={["#1F75FF", "#1F75FF", "#1F75FF", "#1F75FF", "#1F75FF"]}
      />
    </div>
  );
};

export default Loader;
