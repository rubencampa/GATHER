import './scrollMenu.css'
import useDraggableScroll from 'use-draggable-scroll';
import { useRef } from 'react';

const ScrollMenu = () =>{
    const ref = useRef(null);
    const { onMouseDown } = useDraggableScroll(ref,{direction: 'horizontal'});
  
    function temaPulsado (e){
        console.log(e.target)
    }
    return (
      <div ref={ref} onMouseDown={onMouseDown} className="scroll-menu">
          {/* //Poner posible pipeline para nombres largos */}
        <div className="tema item1" onClick={temaPulsado}>Políica</div>
        <div className="tema item2" onClick={temaPulsado}>Videojuegos</div>
        <div className="tema item3" onClick={temaPulsado}>Cultura Internet</div>
        <div className="tema item4" onClick={temaPulsado}>Tema 4</div>
        <div className="tema item5" onClick={temaPulsado}>Tema 5</div>
        <div className="tema item6" onClick={temaPulsado}>Tema 6</div>
        <div className="tema item7" onClick={temaPulsado}>Tema 7</div>
        <div className="tema item8" onClick={temaPulsado}>Tema 8</div>
        <div className="tema item9" onClick={temaPulsado}>Tema 9</div>
        <div className="tema item10" onClick={temaPulsado}>Tema 10</div>
      </div>
    );
}

export default ScrollMenu