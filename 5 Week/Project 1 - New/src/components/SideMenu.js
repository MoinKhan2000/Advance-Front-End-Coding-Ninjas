import React from 'react';

function SideMenu({ menuItems, activeItem }) {
    return (
        <table id="side-menu">
            <tbody>
                <tr>
                    <th className="table-heading">iPod <i className="fas fa-home"></i></th>
                </tr>
                {menuItems.map((item, index) => (
                    <tr
                        key={index}
                        className={activeItem === index ? 'active' : ''}
                        data-option={item.toLowerCase()}
                    >
                        <td className="table-item">
                            {item}
                            <i className="fas fa-chevron-right"></i>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default SideMenu;
