import React from 'react'
import './card-list.styles.css'
import { Card } from '../card/card-component'

export const CardList = (props) => {
  debugger
  return (
    <div className="card-list">
      {props.usersList &&
        props.usersList.map((item, index) => {
          return <Card user={item} key={item.id} />
        })}
    </div>
  )
}
