import { useSearchParams } from "react-router-dom";

function Map() {
  const [searchParams, setSearchParams] = useSearchParams();
  const lng = searchParams.get("lng");
  const lat = searchParams.get("lat");

  return (
    <div style={{ color: "#000" }}>
      Position {lng} {lat}
    </div>
  );
}

export default Map;
