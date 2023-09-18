import React from "react";
// @ts-ignore
import css from "./create-component.module.scss";
import {Checkbox, cn, ComponentIcon, Container, Input, Select, Button} from "shared";

type Item = {
  key: string
}

type Props = {
  className: string
}

export const CreateComponent: React.FC<Props> = ({ className }) => {
  const [items, setItems] = React.useState<Item[]>([])
  
  const onClickAddAttribute = React.useCallback(() => {
    setItems((items: Item[]) => [...items, { key: 'test' + Date.now() }])
  }, [])
  
  const onRemoveAttribute = React.useCallback((item: Item) => () => {
    setItems((items: Item[]) => items.filter((currentItem) => currentItem.key !== item.key))
  }, [])
  
  const itemList = React.useMemo(() => items.map((item: Item) => (
    <Container key={item.key}>
      <Select
        items={[{ key: 'number', label: 'number' }, { key: 'string', label: 'string' }]}
        onClickItem={console.log}
      />
      <Input/>
      <Button onClick={onRemoveAttribute(item)}>Remove</Button>
    </Container>
  )), [items])
  
  return (
    <div className={cn(className, css.createComponent)}>
      <Container direction='column'>
        <Container>
          <ComponentIcon className={css.icon} strokeWidth={4}/>
          <Container className={css.header}>
            <Checkbox />
            <Input/>
            <Button className={css.saveButton}>Save</Button>
          </Container>
        </Container>
        <Container direction='column'>
          {itemList}
          <Button onClick={onClickAddAttribute}>Add attribute</Button>
        </Container>
      </Container>
    </div>
  );
};
