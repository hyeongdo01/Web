import MenuItem from './MenuItem';

function Menu(props) {
  return (
    <div className="menus">
      <MenuItem title={props.items[0].title} price={props.items[0].price} />
    </div>
  );
}

export default Menu;
