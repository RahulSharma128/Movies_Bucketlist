import Card from "../Card/index"
import List from "../List/index"
import { DragDropContext, Draggable } from "react-beautiful-dnd"
import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';
import ModalForm from "./Modalantd";




const Incorporate = () => {



  
  
  const addCardToList = (listName, title, subtitle, updatedAt) => {
    const listCopy = { ...items }
    const list = listCopy[listName]
    const newCard = {
      id: uuidv4(),
      uuid: uuidv4(),
      title,
      subtitle,
      updatedAt
    }
    const newList = [...list, newCard]
    listCopy[listName] = newList
    setItems(listCopy)
  }
  
  const itemsNormal = { 
    available: [
      {
        id: 1,
        uuid: "52f9df20-9393-4c4d-b72c-7bfa4398a4477",
        title: "Avengers End game",
        subtitle: "subtitle",
        updatedAt: "6 days ago"
      },
      {
        id: 2,
        uuid: "52f9df20-9393-4c4d-b72c-7bfa4398a448",
        title: "Ant man?",
        subtitle: "subtitle",
        updatedAt: "2 days ago"
      },
      {
        id: 3,
        uuid: "52f9df20-9393-4c4d-b72c-7bfa4398a449",
        title: "avengers",
        subtitle: "subtitle",
        updatedAt: "3 days ago"
      }
    ],

    assigned: [
      {
        id: 5,
        uuid: "52f9df20-9393-4c4d-b72c-7bfa4398a450",
        title: "Doctor starnge",
        subtitle: "subtitle",
        updatedAt: "6 days ago"
      },
      {
        id: 6,
        uuid: "52f9df20-9393-4c4d-b72c-7bfa4398a451",
        title: "Jogn wick",
        subtitle: "subtitle",
        updatedAt: "2 days ago"
      }
    ]
  }

  const [items, setItems] = useState(itemsNormal)

  const removeFromList = (list, index) => {
    const result = Array.from(list)
    const [removed] = result.splice(index, 1)
    return [removed, result]
  }

  const addToList = (list, index, element) => {
    const result = Array.from(list)
    result.splice(index, 0, element)
    return result
  }

  const onDragEnd = result => {
    if (!result.destination) {
      console.log(result)
      return
    }
    const listCopy = { ...items }
    const sourceList = listCopy[result.source.droppableId]
    const [removedElement, newSourceList] = removeFromList(
      sourceList,
      result.source.index
    )
    listCopy[result.source.droppableId] = newSourceList

    const destinationList = listCopy[result.destination.droppableId]
    listCopy[result.destination.droppableId] = addToList(
      destinationList,
      result.destination.index,
      removedElement
    )
    setItems(listCopy)
    
   }

   
   


   function App() {
    const handleSubmit = (values) => {

      console.log(values); // handle form data here
      addCardToList(values.category,values.name, values.url, "1 hour ago");

    };
  
    return (
      <div>
        <ModalForm onSubmit={handleSubmit} />
      </div>
    );
  }



 

  


  return (
    <>
    <App/>

  
      <DragDropContext onDragEnd={onDragEnd}>
        <div className="flex p-12">
          <List title="Movies to Watch" onDragEnd={onDragEnd} name="available">
         
            {items.available.map((item, index) => (
              <Draggable key={item.id} draggableId={item.id + ""} index={index}>
                {(provided, snapshot) => (
                  <div>
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <Card data={item} />
                    </div>
                  </div>
                )}
              </Draggable>
            ))}
          </List>
          <List title="Already Watched" onDragEnd={onDragEnd} name="assigned">
             {/* ... */}
 {/* */}  
            {items.assigned.map((item, index) => (
              <Draggable draggableId={item.uuid} index={index} key={item.id}>
                {(provided, snapshot) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    <Card data={item} />
                  </div>
                )}
              </Draggable>
            ))}
          </List>
          
        </div>
      </DragDropContext>
    </>
  )
}

export default Incorporate;
