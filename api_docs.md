DELETE /files 
Synopsis:
  Send files to trash
200, 400, 404
Request Body:
{
  ids: [ number ] 
}

POST /files 
Synopsis: upload a file
Request Body:
{ 
  name: string,
  data: string,
  folder: string
}

Status Code 201, 400, 409 
Response Body: 
{ 
  fileId: number 
}

PATCH /files/{id}
  Synopsis: 
    Move file to folder 
    Request Body: 
    { 
      folderId: number
    }
  Status Codes:
    200, 400, 404, 409

DELETE /files/{id}
  Synopsis:
    Send a file to trash.
  Status 200, 404
  
GET /files/{id}
  Synopsis:
    Download a file.
  Status Codes:
    200, 404

  Response Body:
  {
    data: base64
  }

POST /files/{id}/untrash
  Status Codes:
    200, 400, 404

POST /folders
  Synopsis: 
    Create a folder.

  Request Body: 
  {
    name: string
  }

  Status Codes:
    201, 400, 409:
  Response Body: 
  { 
    folderId: number 
  }

DELETE /folders/{id}
  Synopsis: 
    Move a folder to trash.

  Status Codes:
    200, 404

GET /folders/{id} 
  200, 404
  Response Body: 
  {
    created: datetime,
    name: string,
    id: number,
    files: [ 
    { 
      id: number, 
      name: string, 
      folder: string, created: datetime } ]
  }


GET /folders/root
  Synopsis:
    Get everything at the root folder.
  Status Codes:
    200
  Response Body: 
  {
    files: [ fileObject ],
    folders: [ folderObject ]
  }

GET /folders/trash
  Synopsis:
    Get everything in the trash folder.
  Status Codes:
    200
  Response Body:
  {
    files: [ fileObject ],
    folders: [ folderObject ]
  }

DELETE /folders/trash 
  Status Codes:
    200

POST /folder/{id}/untrash 
  Status Codes:
    200, 404

