import React from 'react'
const [isMenuOpen, setIsMenuOpen] = useState(false);
const Catlog = () => {
  return (
    <ul>
        <li onMouseEnter={()=>setIsMenuOpen(true)} onMouseLeave={()=>setIsMenuOpen(false)}>
            <span>Catlog <span>▼</span></span>
            <ul>
                <li><Link></Link></li>
                <li>Catlog 2</li>
                <li>Catlog 3</li>
            </ul>
        </li>
    </ul>
  )
}

export default Catlog