
type Props = {
    title: string;
}

const ArrowFunctionalComponent = ({title} : Props) =>  {

    return(
        <>
            <h1 className="text-center text-xl font-bold mt-12">{title}</h1>
        </>
    )
}
export default ArrowFunctionalComponent;