
import arrow from "../assets/arrow-right-circle.svg";

function SeeAllBtn(props) {
  return (
    <>
      <form action={props.navigateTo}>
        <button className="btn btn-primary">
          See all <img src={arrow} />
        </button>
      </form>
    </>
  );
}

export default SeeAllBtn;
