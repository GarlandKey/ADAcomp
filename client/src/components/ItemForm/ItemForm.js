import './ItemForm.css';

function ItemForm() {
  return (
    <div className="ItemForm">
      <h1>Priority 1 - Title</h1>
      <h2>1.1</h2>
      <p>Is there a route from the site's arrival points (parking, passenger loading zones, public sidewalks, and public transportation stops) that does not involve using stairs?</p>
      <label>
        Yes: <input type="checkbox" name="myCheckbox" />
      </label>
      <label>
        No: <input type="checkbox" name="myCheckbox" />
      </label>
      <label>
        Measurement: <input name="myInput" />
      </label>
      
    </div>
  );
}

export default ItemForm;
