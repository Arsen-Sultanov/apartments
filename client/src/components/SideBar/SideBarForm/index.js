import React from 'react';
import { Form, Button, InputGroup } from 'react-bootstrap';

import './style.css';

const SideBarForm = ({
  values,
  handleChange,
  handleBlur,
  handleSubmit,
  isSubmitting
}) => {
  return (
    <Form className="form" onSubmit={handleSubmit}>

      <Form.Group>
        <Form.Control
          className="formInput"
          name="address"
          placeholder="Адресс"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values[0].address}
        />
      </Form.Group>

      <Form.Group>
        <Form.Control
          className="formInput"
          name="roomsstart"
          placeholder="Колличество комнат от"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values[0].roomsstart}
        />
      </Form.Group>

      <Form.Group>
        <Form.Control
          className="formInput"
          name="roomsend"
          placeholder="Колличество комнат до"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values[0].roomsend}
        />
      </Form.Group>

      <Form.Group>
        <Form.Control
          className="formInput"
          name="floorsstart"
          placeholder="Этажей от"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values[0].floorsstart}
        />
      </Form.Group>

      <Form.Group>
        <Form.Control
          className="formInput"
          name="floorsend"
          placeholder="Этажей до"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values[0].floorsend}
        />
      </Form.Group>


      <Form.Group>
        <Form.Control
          className="formInput"
          name="coststart"
          placeholder="Цена от"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values[0].coststart}
        />
      </Form.Group>

      <Form.Group>
        <Form.Control
          className="formInput"
          name="costend"
          placeholder="Цена до"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values[0].costend}
        />
      </Form.Group>

      <Form.Group>
        <input type="checkbox" name="apartment" value="apartment"></input>
        <label htmlFor="apartment">Квартира</label>
      </Form.Group>

      <Form.Group>
        <input type="checkbox" name="privatehouse" value="private-house"></input>
        <label htmlFor="privatehouse">Частный дом</label>
      </Form.Group>

      <Form.Group>
        <Button
          className="sideBarFormButton"
          variant="danger"
          type="submit"
          disabled={isSubmitting}
        >
          Найти
        </Button>
      </Form.Group>

    </Form>
  );
};

export default SideBarForm;
