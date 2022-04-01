import React, { Fragment , useState } from "react";
const EditTerm =({term})=>{
  const[description , setDescription] = useState (term.description);
  const updateDescription = async e => {
    e.preventDefault();
    try {
      const body = { description };

      const response = await fetch(
        `http://localhost:4000/jat/${term.term_id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body)
        }
      );

      window.location = "/";
    } catch (err) {
      console.error(err.message);
    }
  };
    return <Fragment>
        <button type="button" class="btn btn-primary" data-toggle="modal" data-target={`#id${term.term_id}`}>
  Edit
</button>

        <div class="modal" id={`id${term.term_id}`}>
  <div class="modal-dialog">
    <div class="modal-content">

      
      <div class="modal-header">
        <h4 class="modal-title">Edit Startergic terms</h4>
        <button type="button" class="close" data-dismiss="modal">&times;</button>
      </div>

      
      <div class="modal-body">
        <input type = "text" className="form-control" value= {description}
        onChange={e => setDescription(e.target.value)}
        />
      </div>

      
      <div class="modal-footer">
      <button type="button" class="btn btn-warning" data-dismiss="modal" onClick={e => updateDescription(e)}>Edit</button>
        <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
      </div>

    </div>
  </div>
</div>
    </Fragment>

}
export default EditTerm;