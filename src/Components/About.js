

export default function About(props) {
  return (
    <div style={{color : props.mode === 'dark' ? 'white' : 'black'}}>
      <h1 className="p-3">About Us</h1>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style={{backgroundColor : props.mode === 'dark' ? 'grey' : 'white',
              color : props.mode === 'dark' ? 'white' : 'black'}}
            >
              Analyze your text
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
            style={{backgroundColor : props.mode === 'dark' ? '#262a2b' : 'white',
            color : props.mode === 'dark' ? 'white' : 'black'}}
          >
            <div className="accordion-body">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit ab et tempore neque dicta. Quo quisquam inventore possimus esse est dolor, eius quis accusantium blanditiis, vel sed tenetur obcaecati! Distinctio sint eius animi doloremque velit quasi? Quo doloribus consequuntur corrupti recusandae? Non adipisci aperiam amet sequi molestiae eius laboriosam fuga.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              style={{backgroundColor : props.mode === 'dark' ? 'grey' : 'white',
              color : props.mode === 'dark' ? 'white' : 'black'}}
            >
              Free to use
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
            style={{backgroundColor : props.mode === 'dark' ? '#262a2b' : 'white',
            color : props.mode === 'dark' ? 'white' : 'black'}}
          >
            <div className="accordion-body">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit ab et tempore neque dicta. Quo quisquam inventore possimus esse est dolor, eius quis accusantium blanditiis, vel sed tenetur obcaecati! Distinctio sint eius animi doloremque velit quasi? Quo doloribus consequuntur corrupti recusandae? Non adipisci aperiam amet sequi molestiae eius laboriosam fuga.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
              style={{backgroundColor : props.mode === 'dark' ? 'grey' : 'white',
              color : props.mode === 'dark' ? 'white' : 'black'}}
            >
              Compatible with desktop and mobile phone browser
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
            style={{backgroundColor : props.mode === 'dark' ? '#262a2b' : 'white',
            color : props.mode === 'dark' ? 'white' : 'black'}}
          >
            <div className="accordion-body">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit ab et tempore neque dicta. Quo quisquam inventore possimus esse est dolor, eius quis accusantium blanditiis, vel sed tenetur obcaecati! Distinctio sint eius animi doloremque velit quasi? Quo doloribus consequuntur corrupti recusandae? Non adipisci aperiam amet sequi molestiae eius laboriosam fuga.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
