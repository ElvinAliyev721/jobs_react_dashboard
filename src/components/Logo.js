import logo from '../assets/images/logo.svg';
let img_style={
  width:'50px',
  backgroundColor:'#3b82f6',
  opacity:'0.9',
  borderRadius:'10px'
}
const Logo = () => {
  return <img style={img_style} src={logo} alt='jobster logo' className='logo' />;
};
export default Logo;