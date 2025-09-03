import { ShareIcon } from "../../icons/ShareIcon";

export function Card() {
    return (
      <div>
        <div className="bg-white rounded-md shadow-md border border-gray-200 p-8 max-w-96">
          <div className="flex justify-between">
            <div className="flex items-center">
              <div className="flex">
                <ShareIcon />
              </div>
              Projects
            </div>
            <div className="flex">
              <div className="pr-4 text-gray-500 pr-4">
                <ShareIcon />
              </div>
              <div className="text-gray-500">
                <ShareIcon />
              </div>
            </div>
          </div>
        </div>
      </div>
    );

}