import React from "react";
// @ts-ignore
import css from "./tab-container.module.scss";
import {cn} from "shared/utils";

type Item = {
  key: string;
  icon: React.ReactNode;
  children: React.ReactNode;
};

type Props = {
  items: Item[];
};
export const TabContainer: React.FC<Props> = ({ items }) => {
  const [selectedItemIndex, setSelectedItemIndex] = React.useState(0);

  const onClickItem = React.useCallback((item: Item) => () => {
    setSelectedItemIndex(items.indexOf(item))
  }, [setSelectedItemIndex, items]);
  
  const itemList = React.useMemo(() => items.map((item: Item, index: number) => (
    <div key={item.key} className={cn(css.item, {
      [css.selected]: selectedItemIndex === index
    })} onClick={onClickItem(item)}>
      {item.icon}
    </div>
  )), [items, selectedItemIndex])
  
  const selectedItem = React.useMemo(() => items[selectedItemIndex], [selectedItemIndex, items])
  
  return (
    <div className={css.container}>
      <div>
        {itemList}
      </div>
      <div className={css.content}>
        {selectedItem.children}
      </div>
    </div>
  );
};
