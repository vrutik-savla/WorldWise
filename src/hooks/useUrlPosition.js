import { useSearchParams } from "react-router-dom";

// 234. Fetching City Data in the Form
export function useUrlPosition() {
  const [searchParams] = useSearchParams();
  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");

  return [lat, lng];
}
