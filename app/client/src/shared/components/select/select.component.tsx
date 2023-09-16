import React from "react";
import {ChevronIcon, cn, Container, Label, useClickOutside} from "shared";
// @ts-ignore
import css from "./select.module.scss";

type Item = {
  key: string;
  label: string;
}

type Props = {
  selectLabel?: string;
  defaultItem?: Item;
  items: Item[]
  onClickItem: (item: Item) => void;
};
export const Select: React.FC<Props> = ({
  defaultItem,
  selectLabel  =' Select',
  items = [],
  onClickItem
}) => {
  const ref = React.useRef();
  const { isClickedOutside } = useClickOutside(ref)
  
  const [isOpen, setIsOpen] = React.useState(false);
  const [selectedItem, setSelectedItem] = React.useState(defaultItem);
  
  React.useEffect(() => {
    if(!isOpen) return;
    setIsOpen(false);
  }, [isClickedOutside])
  
  const _onClickItem = React.useCallback((item: Item) => () => {
    setSelectedItem(item)
    setIsOpen(false)
    onClickItem && onClickItem(item);
  }, [])
  
  const itemList = React.useMemo(() => items.map((item: Item) => (
    <Label key={item.key} className={css.option} onClick={_onClickItem(item)}>
      {item.label}
    </Label>
  )),[items]);
  
  const toggleOpen = React.useCallback(() => setIsOpen((prev) => !prev), [setIsOpen]);
  
  return (
    <div ref={ref} className={cn(css.container, {
      [css.isOpen]: isOpen
    })}>
      <Container onClick={toggleOpen} className={css.select}>
        <Label className={css.label}>{selectedItem?.label || selectLabel}</Label>
        <ChevronIcon className={css.icon}/>
      </Container>
      {isOpen && <div className={css.options}>
        {itemList}
      </div>}
    </div>
  );
};
