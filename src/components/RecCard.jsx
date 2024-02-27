export default function RecCard({ imageSrc, title }){
    return (
        <>
            <div style={{ width: "200px", height: "300px" }} className="cartItem">
                <img style={{ width: "100%", objectFit: "cover" }} src={imageSrc} />
                
                <div className="description">
                    <p>
                        <b style={{color:"white"}}> {title}</b>
                    </p>
                </div>
            </div>
        </>
    )
}