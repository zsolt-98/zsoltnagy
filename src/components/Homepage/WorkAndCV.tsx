import PageDivider from "../SVG/PageDivider";
import PageDividerTop from "../SVG/PageDividerTop";

export default function WorkAndCV() {
  return (
    <div className="workcv-wrapper min-vh-100 bg-secondary position-relative">
      <div className="workcv-bg-container position-absolute">
        <div className="workcv-bg-grain position-absolute"></div>
        <PageDivider />
      </div>
    </div>
  );
}
