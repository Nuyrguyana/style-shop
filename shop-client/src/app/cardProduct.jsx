import React from "react";

const CardProduct = () => {
    return (
        <table>
            <tr className="shadow p-4">
                <td className="m-4">
                    <img src={"https://i.pinimg.com/564x/4c/4d/3a/4c4d3a0675c1ab31799a0c55c77be706.jpg"} className="rounded-circle" width="150"/>
                </td>
                <td>
                    <p>платье</p>
                    <p>артикул</p>
                    <p>стоимость</p>
                </td>
                <td>
                    <button className="btn btn-secondary mt-2">Открыть</button>
                </td>
            </tr>
            <tr className="shadow p-4">
                <td>
                    <img src={"https://i.pinimg.com/564x/a0/8c/f4/a08cf4d5cbd0e6b5ea112e2c2821cc24.jpg"} width="150"/>
                </td>
                <td>
                    <p>платье</p>
                    <p>артикул</p>
                    <p>стоимость</p>
                </td>
                <td>
                    <button className="btn btn-secondary mt-2">Открыть</button>
                </td>
            </tr>
            <tr className="shadow p-4">
                <td>
                    <img src={"https://i.pinimg.com/564x/57/1d/00/571d0007bf4666bace2ecbe68bf74981.jpg"} width="150"/>
                </td>
                <td>
                    <p>платье</p>
                    <p>артикул</p>
                    <p>стоимость</p>
                </td>
                <td>
                    <button className="btn btn-secondary mt-2">Открыть</button>
                </td>
            </tr>
        </table>
    )
}
export default CardProduct