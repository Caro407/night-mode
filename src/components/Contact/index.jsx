import React from 'react';

const Contact = () => {

  return (
    <div className="container">
      <h2>Je vous intéresse ? Contactez-moi !</h2>
      <form>
        <label>
          Sujet
        </label>
        <input/>

        <label>
          Message
        </label>
        <textarea>
          Kikou
        </textarea>
        <button className="btn">Envoyer</button>
      </form>
    </div>
  )
};

export default Contact;
