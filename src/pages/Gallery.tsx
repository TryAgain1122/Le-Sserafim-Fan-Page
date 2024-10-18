import { motion } from "framer-motion"
import PhotoGallery from "../components/PhotoGallery"
import HeaderGallery from "../components/HeaderGallery"
import { useState } from "react"

const Gallery = () => {
  const [selectCategory, setSelectedCategory] = useState<string>('all');

  const handleSelectedCategory = (category: string) => {
    setSelectedCategory(category)
  }
  return (
    
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1}}
      exit={{ opacity: 0}}
      // transition={{ delay: 0.3, ease: "easeOut"}}
      className="bg-gradient-to-r from-violet-400 to-purple-300 min-h-screen"
    >
      <HeaderGallery onSelectCategory={handleSelectedCategory}/>
      <PhotoGallery />
    </motion.div>
    
  )
}

export default Gallery