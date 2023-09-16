import React from "react";
// @ts-ignore
import css from "./create-component.module.scss";
import {Checkbox, cn, ComponentIcon, Container, Input, Select} from "shared";
import {Button} from "shared/components/button/button.component";

type Item = {
  key: string
}

type Props = {
  className: string
}

export const CreateComponent: React.FC<Props> = ({ className }) => {
  const [items, setItems] = React.useState<Item[]>([])
  
  const onClickAdd = React.useCallback(() => {
    setItems((items: Item[]) => [...items, { key: 'test' + Date.now() }])
  }, [])
  
  const onRemoveItem = React.useCallback((item: Item) => () => {
    setItems((items: Item[]) => items.filter((currentItem) => currentItem.key !== item.key))
  }, [])
  
  const itemList = React.useMemo(() => items.map((item: Item) => (
    <Container key={item.key}>
      <Select
        items={[{ key: 'number', label: 'number' }, { key: 'string', label: 'string' }]}
        onClickItem={console.log}
      />
      <Input/>
      <Button onClick={onRemoveItem(item)}>Remove</Button>
    </Container>
  )), [items])
  
  return (
    <div className={cn(className, css.createComponent)}>
      <div>
        <Container>
          <ComponentIcon className={css.icon} strokeWidth={4}/>
          <Container className={css.header}>
            <Checkbox />
            <Input/>
          </Container>
        </Container>
        <Container direction='column'>
          {itemList}
          <Button onClick={onClickAdd}>Add</Button>
        </Container>
      </div>
    </div>
  );
};
