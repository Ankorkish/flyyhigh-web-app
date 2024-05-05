import { useNavigate, useSearchParams } from "react-router-dom";

function Map() {
  const navigate = useNavigate();

  const [searchParams, setSearchParams] = useSearchParams();
  const lng = searchParams.get("lng");
  const lat = searchParams.get("lat");

  return (
    <div style={{ color: "#000" }} onClick={() => navigate("/app/form")}>
      Position {lng} {lat}
    </div>
  );
}

export default Map;
