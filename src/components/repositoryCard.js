import React from "react"
import Chip from "./chip"
import Label from "./label"
import { repositoryCard, repositoryName } from "./repositoryCard.module.css"

const getDarkerColor = (hexaColor, factor = 1) => {
  const posibilities = "0123456789ABCDEF"
  var darkerColor = "#"
  for (let i = 1; i < hexaColor.length; i++) {
    const currentValueIndex = posibilities.indexOf(
      hexaColor.toUpperCase().charAt(i)
    )
    if (currentValueIndex >= factor) {
      darkerColor =
        darkerColor + posibilities.charAt(currentValueIndex - factor)
    } else {
      darkerColor = darkerColor + "0"
    }
  }
  return darkerColor
}

const RepositoryCard = ({ repository }) => {
  const { name, url, description, languages, repositoryTopics } = repository
  return (
    <div className={repositoryCard}>
      <a
        className={repositoryName}
        href={url}
        target="_blank"
        rel="noopener noreferrer"
      >
        <h3>{name}</h3>
      </a>
      {(repositoryTopics?.nodes || []).map(({ topic }, index) => (
        <Label key={index} text={topic.name} />
      ))}
      <div>
        <p>{description}</p>
      </div>
      <div>
        {(languages?.nodes || []).map(({ name, color }, index) => (
          <Chip
            key={index}
            text={name}
            backgroundColor={color + "10"}
            color={getDarkerColor(color, 4)}
          />
        ))}
      </div>
    </div>
  )
}

export default RepositoryCard
