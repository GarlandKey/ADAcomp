import placeholder from "./img/placeholder.webp";
import "./PointForm.css";

function PointForm() {
  return (
    <div className="PointForm">
      <section>
        <h2>1.1</h2>
        <p>Is there a route from the site's arrival points (parking, passenger loading zones, public sidewalks, and public transportation stops) that does not involve using stairs?</p>
        <form>
          <label>Yes</label>
          <input type="checkbox" name="myCheckbox" />
        </form>
        <form>
          <label>No</label>
          <input type="checkbox" name="myCheckbox" />
        </form>
        <img src={placeholder} className="PointFormIllustration" alt="illustration" />
      </section>

      <section>
        <form>
          <label>What is the location of the route?</label>
          <input type="text" name="location" />
        </form>
      </section>
      <form>
        <label>Additional comments:</label>
       <input className="PointFormComments" name="comments" />
      </form>
      <section>

      </section>
      <p>Possible solutions:</p>
        <ul>
          <li>Add a ramp</li>
          <li>Regrade to 1:20 maximum slope</li>
          <li>Add a lift if site constraints prevent other solutions</li>
        </ul>
      <label>
        Additional solutions: <input className="PointFormSolutions" name="solutions" />
      </label>
      <button>Take Photo</button>
    </div>
  );
}

export default PointForm;
