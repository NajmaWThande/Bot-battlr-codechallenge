import React from 'react'
import BotCard from "../components/BotCard"

export default function BotCollection({ botCollection, action, removeCard }) {
  const displayBotCards = botCollection.map(bot => {
    return <BotCard bot={bot} action={action} removeCard={removeCard} />
  })

  return (
    <div className="ui four column grid">
      <div className="row">
        {displayBotCards}
        You have completed your own Bot Army. There are no more bots to be collect.
      </div>
    </div>
  )
}