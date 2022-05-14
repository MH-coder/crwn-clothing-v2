import './directory.styles.scss'

import CategoryItem from '../directory-item/directory-item.component'
import '../directory-item/directory-item.styles.scss'

const Directory = ({ categories }) => {
  return (
    <div className="directory-container">
      {
        categories.map((category) => (
          <CategoryItem key={category.id} category={category} />
        ))
      }
    </div>
  )
}

export default Directory