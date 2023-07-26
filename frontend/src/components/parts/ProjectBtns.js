import { useState, useContext } from 'react'
import { client } from '../../client'
import { v4 } from 'uuid'
import { UserContext } from '../../utils/contextApi'
import { motion } from 'framer-motion'


export const LikeBtn = ({ project }) => {

  const anonymousID = useContext(UserContext)
  const isLiked 
    = project.likes !== null 
    && Boolean(project.likes.filter((like) => like.id === anonymousID).length)
  const projectNumLikes = !!project.likes?.length ? project.likes.length : 0
  const [isLike, setIsLike] = useState(isLiked)
  const [numLikes, setNumLikes] = useState(projectNumLikes)

  const handleLike = () => {
    if (!isLike) {
      setIsLike(true)
      setNumLikes(numLikes + 1)
      client
        .patch(project._id)
        .setIfMissing({likes: []})
        .insert('before', 'likes[-1]', [{
          _key: v4(),
          id: anonymousID
        }])
        .commit()
    }
  }

  return (
    <motion.button 
      whileHover={{scale: 1.05}}
      whileTap={{scale: .9}} 
      onClick={handleLike} 
      className={`rounded like ${isLike && 'inter'}`}
    >
      <span className="material-symbols-rounded">favorite</span>
      <span>{numLikes}</span>
    </motion.button>
  )
}



export const ViewBtn = ({ project }) => {

  const anonymousID = useContext(UserContext)
  const isViewd 
    = project.views !== null
    && Boolean(project.views.filter((view) => view.id === anonymousID).length)
  const projectNumViews = !!project.views?.length ? project.views.length : 0
  const [isView, setIsView] = useState(isViewd)
  const [numViews, setNumViews] = useState(projectNumViews)

  const handleView = () => {
    if (!isView) {
      setIsView(true)
      setNumViews(numViews + 1)
      client
        .patch(project._id)
        .setIfMissing({views: []})
        .insert('before', 'views[-1]', [{
          _key: v4(),
          id: anonymousID
        }])
        .commit().then(() => {window.location.href = project.link})
    } else {
      window.location.href = project.link
    }
  }
  return (
    <button onClick={handleView} className={`rounded ${isView && 'inter'}`}>
      <span className="material-symbols-rounded">visibility</span>
      <span>{numViews}</span>
    </button>
    
  )
}
