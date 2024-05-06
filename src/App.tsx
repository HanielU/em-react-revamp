import cn from "clsx";
import { cjsConvo as convo } from "./conversations";

function App() {
  return (
    <div className="h-100vh flex [&>*]:p-4">
      {/* SIDEBAR */}
      <div className="h-full flex-[0.25] bg-gray-2">
        <h1 className="text-gray-7 text-lg font-bold">Sidebar</h1>
      </div>

      {/* MESSAGES */}
      <div className="bg-blue h-full flex-[0.5]">
        <h1 className="text-gray-7 text-lg font-bold">Messages</h1>
      </div>

      {/* CONVERSATION */}
      <div className="bg-green-50 h-full flex-1">
        {/* HEADER */}
        <div>
          <h1 className="text-gray-7 text-lg font-bold">John Doe</h1>
        </div>

        {/* Conversations */}
        <div>
          {convo.map(conversation => {
            const isSelf = conversation.id === "personTwo";
            return (
              <div className="p-4 flex group first:mb-2" key={conversation.key}>
                <p
                  className={cn("rounded-lg px-3 py-2 break-words max-w-64 lg:max-w-96", {
                    "text-white bg-blue mr-0 ml-auto": isSelf,
                    "mr-auto bg-gray-3": !isSelf
                  })}
                >
                  {conversation.message}
                </p>
              </div>
            );
          })}
        </div>

        {/* FOOTER */}
        <div>{/*  */}</div>
      </div>
    </div>
  );
}

export default App;
