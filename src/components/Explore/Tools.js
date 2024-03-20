import toolsImg from '../../assets/construction.svg'

export default function Tools() {
    return (
        <>
            <div className="d-flex justify-content-center align-items-center flex-column gap-4">
                <h3 className='text-white construction-text'>This section is under construction</h3>
                <img src={toolsImg} alt="" className='img-img-fluid' />
            </div>
        </>
    )
}