export default(props) => (
    <div id="clase-container">
        <h2>Clase de {props.nombre_clase}</h2>
        {props.alumnos.map(item=>{
            return(
                <div className="clase-list">
                    <img src={item.foto} alt=""/>
                    <p>{item.first_name} {item.last_name}</p>
                </div>
            )
        }
        )}
        <style jsx>
            {
                `
                    #clase-container{
                        perspective: 500px;
                    }
                    .clase-list{
                        display:flex;
                    }
                    .clase-list img{
                        padding:3px;
                        border:1px solid #ccc
                    }
                    .clase-list p{
                        font-size: 14px;
                        font-weight: bold;
                        font-style:italic;
                        margin-left:12px;
                    }
                    .clase-list:hover{
                        transform:translateY(5px)scale(1);
                    }
                `
            }
        </style>
    </div>
)