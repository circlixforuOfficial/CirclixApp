
import ItemCardSmall from "./ItemCardSmall";
import SeeAllBtn from "../component/SeeAllBtn";

function ItemContainer(props) {

  const testData=[
  {
    id: "1",
    itemName: "Laptop",
    category: "Electronics",
    description: "High-end gaming laptop",
    bidLimit: "5000",
    endDate: "2025-12-31",
    endTime: "23:59"
  },
  {
    id: "2",
    itemName: "Chair",
    category: "Furniture",
    description: "Ergonomic office chair",
    bidLimit: "1500",
    endDate: "2025-11-30",
    endTime: "18:00"
  }
];

  return (
    <>
      <div className=" user-page d-flex test flex-wrap bg-white h-50 border rounded-top-4 p-3">
        <h3 className="fs-4">{props.division}</h3>
        <div className="w-100 d-flex flex-row justify-content-between align-items-center">
          <div className="d-flex flex-row overflow-hidden">
            <div className="d-flex flex-row w-100">
              {testData.map(item => (
                <ItemCardSmall
                  key={item.id} // use item.id if available
                  parent={props.division}
                  itemName={item.itemName}
                  
                  // pass other props as needed
                />
              ))}
          </div>
          </div>
          <SeeAllBtn navigateTo={props.navigateTo}/>
        </div>
      </div>
    </>
  );
} 

export default ItemContainer;
