import React from 'react'
import './card.styles.css'
import { shallow, mount, render } from 'enzyme'
export const Card = (props) => {
  return (
    <div className="card-container" key={props.user.id}>
      <img
        alt="users"
        src={`https://robohash.org/${props.user.id}?set=set2$size=180*180`}
      />
      <h3>{props.user.name}</h3>
      <h4>{props.user.email}</h4>
    </div>
  )
}
