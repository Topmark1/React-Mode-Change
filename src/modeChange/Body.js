import logo2 from '../images/logo2.PNG'

export default function Body({style,Change}){
const info = `Machine CODE - 1949
Assembly - 1949
HTML - 1993
Javascript - 4th December 1995
CSS - 17th December 1996
C - 1972
C++ - 1985
Java - 23rd May 1995`

const info2 = `Python - 20th February 1991
Ruby - 1995
Rust - July 7, 2010
GO Lang - November 10,2009
Bash - June 8, 1989
C# - 2000`

const details1 = info.split('\n').map((inf)=> (<>{inf}<hr></hr></>))
const details2 = info2.split('\n').map((inf2)=> (<>{inf2}<hr></hr></>))
//<hr></hr>
    return (
        <>    
    <div  className='body' style={style.bodycolor}>
<h2 className='title2' style={style.darkcolor}>Some Programming Language and Year Invented</h2>
<img src={logo2} alt='logo2' className='logo2'/>
<div className='details'><p id='details' style={style.darkcolor}>
{details1}
</p>
<p id='details' style={style.darkcolor}>
{details2}
</p>
</div>
</div>
        </>)
}