import React from 'react'
import styles from '../styles/Blog.module.scss'

const Blog = () => {
  return (
    <div className={styles.blogMain}>
    <div className={`${styles.blogContent} w-[80%] `}>
      <div className={`${styles.blogName }  py-[50px]`}>
        FEELINGS OF OUR HAPPY CLIENTS
      </div>
      <div>
        "Hulla tincidunt convallis bibendum.Donec nec posuere nunc,rutrum massa. Maec elementum consequat iaculis ac, aliquam in Sed estas, mas stibulum felis id ex.  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo ipsa quod nisi eius neque, facilis deserunt atque voluptatibus velit ex? Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo ipsa quod nisi eius neque, facilis deserunt atque voluptatibus velit ex?"
      </div>

      <div>
        <div className={styles.blogName}>Clara</div>

        Advocate
        "Arcu non convallis bibendum.Donec nec posuere nunc,rutrum massa. Maec elementum consequat iaculis ac, aliquam in Sed estas, mas stibulum felis id ex.  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo ipsa quod nisi eius neque, facilis deserunt atque voluptatibus velit ex?Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo ipsa quod nisi eius neque, facilis deserunt atque voluptatibus velit ex?"
      </div>

      <div>
        <div className={styles.blogName}>James</div>

        Teacher
        "Maec elementum consequat iaculis ac, aliquam in Sed estas, mas stibulum felis id ex. Nulla tincidunt convallis bibendum.Donec nec posuere nunc,rutrum massa. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo ipsa quod nisi eius neque, facilis deserunt atque voluptatibus velit ex? Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo ipsa quod nisi eius neque, facilis deserunt atque voluptatibus velit ex?"
      </div>

      <div>
        <div className={styles.blogName}>Lucia</div>

        Engineer
        "Malla tincidunt convallis bibendum.Donec nec posuere nunc,rutrum massa. Maec elementum consequat iaculis ac, aliquam in Sed estas, mas stibulum felis id ex. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium incidunt, excepturi exercitationem eveniet, corporis labore dolore asperiores tenetur voluptate, reiciendis dicta suscipit. Veniam labore tempora provident, laudantium sint doloremque maiores.Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo ipsa quod nisi eius neque, facilis deserunt atque voluptatibus velit ex?"
      </div>

      <div>
        <div className={styles.blogName}>Diana</div>

        Model
        "Hulla tincidunt convallis bibendum.Donec nec posuere nunc,rutrum massa. Maec elementum consequat iaculis ac, aliquam in Sed estas, mas stibulum felis id ex. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo ipsa quod nisi eius neque, facilis deserunt atque voluptatibus velit ex? Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo ipsa quod nisi eius neque, facilis deserunt atque voluptatibus velit ex?"
      </div>    
      </div>
    </div>
  )
}

export default Blog