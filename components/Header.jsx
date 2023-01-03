import headerStyle from './../styles/Header.module.css';

const Header = () => {
  return (
    <div>
          <h1 className={headerStyle.title}>
              <span>WebDev</span>News
          </h1>
          <p className={headerStyle.description}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam nisi soluta eos fugiat quasi officia mollitia, nulla minus quam optio! Labore est officiis perspiciatis numquam culpa odio cum? Eos dignissimos, culpa, aliquam deserunt excepturi impedit itaque beatae cum consequuntur laboriosam officiis, et aspernatur velit similique doloribus error blanditiis ullam minima.
          </p>
    </div>
  )
}

export default Header
