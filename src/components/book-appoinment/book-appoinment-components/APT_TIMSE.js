import React from 'react'

export default function APT_TIMSE(props) {
  return (
    <>
      <li>
        <label class="container-radio ">
          {props.time}
          <input type="radio" name="apt2radio" />
          <span class="checkmark"></span>
        </label>
      </li>
    </>
  );
}
