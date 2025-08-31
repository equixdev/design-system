import { FC } from "react";
import { DragDropContext, OnDragEndResponder } from "react-beautiful-dnd";

type Item = {
  id?: number;
} & {
  [key: string]: string | number | boolean;
};

interface Props {
  items: Item[];
  setItems: (items: Item[]) => void;
}

export const DragNDropZone: FC<Props> = (props) => {
  const { items, setItems } = props;

  const handleDragEnd: OnDragEndResponder = ({ destination, source }) => {
    if (!destination) return;

    if (
      destination.index === source.index &&
      destination.droppableId === source.droppableId
    )
      return;

    setItems(
      items.map((item) =>
        item.id === source.index
          ? { ...item, status: destination.droppableId }
          : item
      )
    );

    const targetItem = items.find(({ id }) => id === source.index);

    if (targetItem) {
      targetItem["state"] = destination.droppableId;
    }
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      TODO
      {/*
      <Droppable droppableId={state} key={index}>
        {(provided) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            className="flex flex-col gap p w-full min-h-full border border-border rounded"
          >
            <h2 className="font-semibold p-2">
              {capitalize(state.toLowerCase()).replaceAll("_", " ")}
            </h2>
            {items.map(
              (item, index) =>
                item.state === state && (
                  <Draggable
                    key={index}
                    draggableId={order.id.toString()}
                    index={order.id}
                  >
                    {(provided) => (
                      <Link
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        className="flex flex-col gap text-accent rounded border border-border p-2"
                        href={`/orders/${item.id}`}
                      >
                        <span>Order {item.number}</span>
                        <span>
                          {new Date(item.createdAt as string).toLocaleString(
                            "ru"
                          )}
                        </span>
                      </Link>
                    )}
                  </Draggable>
                )
            )}
          </div>
        )}
      </Droppable> */}
    </DragDropContext>
  );
};
