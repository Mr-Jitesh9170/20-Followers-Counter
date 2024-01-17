import "./Increamenting.scss"
export const Increamenting = () => {
  
  return (
    <div className="increamenting-container">
      {
        IncreamentingCounter.map((_, i) => {
          return (
            <div className="Counter" key={i}>
              <div>{_.SocialMediaIcon}</div>
              <h2 >{_.Follwovers}</h2>
              <div>{_.name}</div>
            </div>
          )
        })
      }
    </div>
  )
}

const IncreamentingCounter = [
  {
    SocialMediaIcon: "Twitter",
    Follwovers: 12000,
    name: "Twitter Fan"
  },
  {
    SocialMediaIcon: "Facebook",
    Follwovers: 435424,
    name: "Facebook Fan"
  }, {
    SocialMediaIcon: "Youtube",
    Follwovers: 45984,
    name: "Youtube Subscribers"
  },
]