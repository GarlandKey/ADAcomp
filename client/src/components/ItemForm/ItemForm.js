import placeholder from './img/placeholder.webp';
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
        Location of route: <input name="location" />
      </label>
      <img src={placeholder} className="ItemFormIllustration" alt="illustration" />
      <label>
        Additional comments: <input className="ItemFormComments" name="comments" />
      </label>
      <label>
        Possible solutions:
        <ul>
          <li>Add a ramp</li>
          <li>Regrade to 1:20 maximum slope</li>
          <li>Add a lift if site constraints prevent other solutions</li>
        </ul>
      </label>
      <label>
        Additional solutions: <input className="ItemFormSolutions" name="solutions" />
      </label>
      <button>Take Photo</button>
    </div>
  );
}

export default ItemForm;
