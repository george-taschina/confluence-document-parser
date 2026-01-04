import type {
  OpenAPIClient,
  Parameters,
  UnknownParamsObject,
  OperationResponse,
  AxiosRequestConfig,
} from 'openapi-client-axios';

declare namespace Components {
    namespace RequestBodies {
        export interface AdminKeyRequest {
            /**
             * The requested duration of admin key access in minutes, up to a maximum of 60 minutes, after which the issued admin key will automatically expire.
             * example:
             * 60
             */
            durationInMinutes?: number; // int32
        }
        export interface BlogPostCreateRequest {
            /**
             * ID of the space
             */
            spaceId: string;
            /**
             * The status of the blog post, specifies if the blog post will be created as a new blog post or a draft
             */
            status?: "current" | "draft";
            /**
             * Title of the blog post, required if creating non-draft.
             */
            title?: string;
            body?: Schemas.BlogPostBodyWrite | /**
             * Body of the blog post. Only one body format should be specified as the property
             * for this object, e.g. `storage`.
             */
            Schemas.BlogPostNestedBodyWrite;
            /**
             * Created date of the blog post in the format of "yyyy-MM-ddTHH:mm:ss.SSSZ".
             */
            createdAt?: string;
        }
        export interface BlogPostUpdateRequest {
            /**
             * Id of the blog post.
             */
            id: string;
            /**
             * The updated status of the blog post.
             *
             * Note, if you change the status of a blog post from 'current' to 'draft' and it has an existing draft, the existing draft will be deleted in favor of the updated draft.
             * Additionally, this endpoint can be used to restore a 'trashed' or 'deleted' blog post to 'current' status. For restoration, blog post contents will not be updated and only the blog post status will be changed.
             */
            status: "current" | "draft";
            /**
             * Title of the blog post.
             */
            title: string;
            /**
             * ID of the containing space.
             *
             * This currently **does not support moving the blog post to a different space**.
             */
            spaceId?: string;
            body: Schemas.BlogPostBodyWrite | /**
             * Body of the blog post. Only one body format should be specified as the property
             * for this object, e.g. `storage`.
             */
            Schemas.BlogPostNestedBodyWrite;
            version: {
                /**
                 * The new version number of the updated blog post.
                 * Set this to the current version number plus one, unless you are updating the status to 'draft' which requires a version number of 1.
                 *
                 * If you don't know the current version number, use Get blog post by id.
                 */
                number?: number; // int32
                /**
                 * An optional message to be stored with the version.
                 */
                message?: string;
            };
            /**
             * Created date of the blog post in the format of "yyyy-MM-ddTHH:mm:ss.SSSZ".
             */
            createdAt?: string;
        }
        export interface BulkUsersRequest {
            /**
             * List of accountIds to retrieve user info for.
             */
            accountIds: [
                string,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?
            ];
        }
        export interface CheckAccessOrInviteByEmailRequest {
            /**
             * List of emails to check access to site.
             */
            emails: [
                string,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?
            ];
        }
        export interface ContentClassificationLevelDeleteRequest {
            /**
             * Status of the content.
             */
            status: "current" | "draft";
        }
        export interface ContentClassificationLevelUpdateRequest {
            /**
             * The ID of the classification level.
             */
            id: string;
            /**
             * Status of the content.
             */
            status: "current" | "draft";
        }
        export interface ContentIdToContentTypeRequest {
            /**
             * The content ids to convert. They may be provided as strings or numbers.
             */
            contentIds: [
                (string | number)?,
                (string | number)?,
                (string | number)?,
                (string | number)?,
                (string | number)?,
                (string | number)?,
                (string | number)?,
                (string | number)?,
                (string | number)?,
                (string | number)?,
                (string | number)?,
                (string | number)?,
                (string | number)?,
                (string | number)?,
                (string | number)?,
                (string | number)?,
                (string | number)?,
                (string | number)?,
                (string | number)?,
                (string | number)?,
                (string | number)?,
                (string | number)?,
                (string | number)?,
                (string | number)?,
                (string | number)?,
                (string | number)?,
                (string | number)?,
                (string | number)?,
                (string | number)?,
                (string | number)?,
                (string | number)?,
                (string | number)?,
                (string | number)?,
                (string | number)?,
                (string | number)?,
                (string | number)?,
                (string | number)?,
                (string | number)?,
                (string | number)?,
                (string | number)?,
                (string | number)?,
                (string | number)?,
                (string | number)?,
                (string | number)?,
                (string | number)?,
                (string | number)?,
                (string | number)?,
                (string | number)?,
                (string | number)?,
                (string | number)?,
                (string | number)?,
                (string | number)?,
                (string | number)?,
                (string | number)?,
                (string | number)?,
                (string | number)?,
                (string | number)?,
                (string | number)?,
                (string | number)?,
                (string | number)?,
                (string | number)?,
                (string | number)?,
                (string | number)?,
                (string | number)?,
                (string | number)?,
                (string | number)?,
                (string | number)?,
                (string | number)?,
                (string | number)?,
                (string | number)?,
                (string | number)?,
                (string | number)?,
                (string | number)?,
                (string | number)?,
                (string | number)?,
                (string | number)?,
                (string | number)?,
                (string | number)?,
                (string | number)?,
                (string | number)?,
                (string | number)?,
                (string | number)?,
                (string | number)?,
                (string | number)?,
                (string | number)?,
                (string | number)?,
                (string | number)?,
                (string | number)?,
                (string | number)?,
                (string | number)?,
                (string | number)?,
                (string | number)?,
                (string | number)?,
                (string | number)?,
                (string | number)?,
                (string | number)?,
                (string | number)?,
                (string | number)?,
                (string | number)?,
                (string | number)?
            ];
        }
        export interface CustomContentCreateRequest {
            /**
             * Type of custom content.
             */
            type: string;
            /**
             * The status of the custom content. Defaults to `current` when status not provided.
             */
            status?: "current" | "draft";
            /**
             * ID of the containing space.
             */
            spaceId?: string;
            /**
             * ID of the containing page.
             */
            pageId?: string;
            /**
             * ID of the containing Blog Post.
             */
            blogPostId?: string;
            /**
             * ID of the containing custom content.
             */
            customContentId?: string;
            /**
             * Title of the custom content.
             */
            title: string;
            body: Schemas.CustomContentBodyWrite | /**
             * Body of the custom content. Only one body format should be specified as the property
             * for this object, e.g. `storage`.
             */
            Schemas.CustomContentNestedBodyWrite;
        }
        export interface CustomContentUpdateRequest {
            /**
             * Id of custom content.
             */
            id: string;
            /**
             * Type of custom content.
             */
            type: string;
            /**
             * The status of the custom content.
             */
            status: "current";
            /**
             * ID of the containing space (must be the same as the spaceId of the space the custom content was created in).
             */
            spaceId?: string;
            /**
             * ID of the containing page.
             */
            pageId?: string;
            /**
             * ID of the containing Blog Post.
             */
            blogPostId?: string;
            /**
             * ID of the containing custom content.
             */
            customContentId?: string;
            /**
             * Title of the custom content.
             */
            title: string;
            body: Schemas.CustomContentBodyWrite | /**
             * Body of the custom content. Only one body format should be specified as the property
             * for this object, e.g. `storage`.
             */
            Schemas.CustomContentNestedBodyWrite;
            version: {
                /**
                 * The version number, must be incremented by one.
                 */
                number?: number; // int32
                /**
                 * An optional message to be stored with the version.
                 */
                message?: string;
            };
        }
        export interface DatabaseCreateRequest {
            /**
             * ID of the space.
             */
            spaceId: string;
            /**
             * Title of the database.
             */
            title?: string;
            /**
             * The parent content ID of the database.
             */
            parentId?: string;
        }
        export interface FolderCreateRequest {
            /**
             * ID of the space.
             */
            spaceId: string;
            /**
             * Title of the folder.
             */
            title?: string;
            /**
             * The parent content ID of the folder.
             */
            parentId?: string;
        }
        export interface LiveEditContentClassificationLevelResetRequest {
            /**
             * Status of the content.
             */
            status: "current";
        }
        export interface LiveEditContentClassificationLevelUpdateRequest {
            /**
             * The ID of the classification level.
             */
            id: string;
            /**
             * Status of the content.
             */
            status: "current";
        }
        export interface PageCreateRequest {
            /**
             * ID of the space.
             */
            spaceId: string;
            /**
             * The status of the page, published or draft.
             */
            status?: "current" | "draft";
            /**
             * Title of the page, required if page status is not draft.
             */
            title?: string;
            /**
             * The parent content ID of the page. If the `root-level` query parameter is set to false and a value is
             * not supplied for this parameter, then the space homepage's ID will be used. If the `root-level` query
             * parameter is set to true, then a value may not be supplied for this parameter.
             */
            parentId?: string;
            body?: Schemas.PageBodyWrite | /**
             * Body of the page. Only one body format should be specified as the property
             * for this object, e.g. `storage`.
             */
            Schemas.PageNestedBodyWrite;
            /**
             * The subtype of the page. Provide the subtype live to create a live doc or no subtype to create a page.
             */
            subtype?: "live";
        }
        export interface PageTitleUpdateRequest {
            /**
             * The status of the page, current or draft.
             */
            status: "current" | "draft";
            /**
             * The updated title for the page
             */
            title: string;
        }
        export interface PageUpdateRequest {
            /**
             * Id of the page.
             */
            id: string;
            /**
             * The updated status of the page.
             *
             * Note, if you change the status of a page from 'current' to 'draft' and it has an existing draft, the existing draft will be deleted in favor of the updated draft.
             * Additionally, this endpoint can be used to restore a 'trashed' or 'deleted' page to 'current' status. For restoration, page contents will not be updated and only the page status will be changed.
             */
            status: "current" | "draft";
            /**
             * Title of the page.
             */
            title: string;
            /**
             * ID of the containing space.
             *
             * This currently **does not support moving the page to a different space**.
             */
            spaceId?: any; // string
            /**
             * ID of the parent content.
             *
             * This allows the page to be moved under a different parent within the same space.
             */
            parentId?: any; // string
            /**
             * Account ID of the page owner.
             *
             * This allows page ownership to be transferred to another user.
             */
            ownerId?: any; // string
            body: Schemas.PageBodyWrite | /**
             * Body of the page. Only one body format should be specified as the property
             * for this object, e.g. `storage`.
             */
            Schemas.PageNestedBodyWrite;
            version: {
                /**
                 * The new version of the updated page.
                 * Set this to the current version number plus one, unless you are updating the status to 'draft' which requires a version number of 1.
                 *
                 * If you don't know the current version number, use Get page by id.
                 */
                number?: number; // int32
                /**
                 * An optional message to be stored with the version.
                 */
                message?: string;
            };
        }
        export interface RedactionRequest {
            /**
             * Timestamp when the content was last updated.
             */
            createdAt: string; // date-time
            /**
             * Whether to clean up previous versions containing the redaction. When true, historical versions of the content that contain the redacted text will be squashed.
             */
            cleanHistory: boolean;
            body?: {
                redactions?: Schemas.Redaction[];
            };
            title?: {
                redactions?: Schemas.Redaction[];
            };
        }
        export type SetSpaceRoleAssignmentRequest = {
            principal: /* The principal of the role assignment. */ Schemas.Principal;
            /**
             * The role to which the principal is assigned.
             */
            roleId?: string;
        }[];
        export interface SmartLinkCreateRequest {
            /**
             * ID of the space.
             */
            spaceId: string;
            /**
             * Title of the Smart Link in the content tree.
             */
            title?: string;
            /**
             * The parent content ID of the Smart Link in the content tree.
             */
            parentId?: string;
            /**
             * The URL that the Smart Link in the content tree should be populated with.
             */
            embedUrl?: string;
        }
        export interface SpaceCreateRequest {
            /**
             * The name of the space to be created.
             */
            name: string;
            /**
             * The key for the new space. See [Space Keys](https://support.atlassian.com/confluence-cloud/docs/create-a-space/). If the key property is not provided, the alias property is required to be used instead.
             */
            key?: string;
            /**
             * This field will be used as the new identifier for the space in confluence page URLs. If the alias property is not provided, the key property is required to be used instead. Maximum 255 alphanumeric characters in length.
             */
            alias?: string;
            /**
             * The description of the new/updated space. Note, only the 'plain' representation is currently supported.
             */
            description?: {
                /**
                 * The space description.
                 */
                value?: string;
                /**
                 * The format of the description.
                 */
                representation?: string;
            };
            roleAssignments?: {
                principal?: /* The principal of the role assignment. */ Schemas.Principal;
                /**
                 * The role to which the principal is assigned.
                 */
                roleId?: string;
            }[];
            /**
             * The id of the space to copy the space access configuration from.
             */
            copySpaceAccessConfiguration?: number;
            /**
             * Whether to create the space as private.
             */
            createPrivateSpace?: boolean;
            /**
             * The key of the template to use.
             */
            templateKey?: string;
        }
        export interface SpaceDefaultClassificationLevelUpdateRequest {
            /**
             * The ID of the classification level.
             */
            id: string;
        }
        export interface TaskUpdateRequest {
            /**
             * ID of the task.
             */
            id?: string;
            /**
             * Local ID of the task. This ID is local to the corresponding page or blog post.
             */
            localId?: string;
            /**
             * ID of the space the task is in.
             */
            spaceId?: string;
            /**
             * ID of the page the task is in.
             */
            pageId?: string;
            /**
             * ID of the blog post the task is in.
             */
            blogPostId?: string;
            /**
             * Status of the task.
             */
            status: "complete" | "incomplete";
            /**
             * Account ID of the user who created this task.
             */
            createdBy?: string;
            /**
             * Account ID of the user to whom this task is assigned.
             */
            assignedTo?: string;
            /**
             * Account ID of the user who completed this task.
             */
            completedBy?: string;
            /**
             * Date and time when the task was created. In format "YYYY-MM-DDTHH:mm:ss.sssZ".
             */
            createdAt?: string; // date-time
            /**
             * Date and time when the task was updated. In format "YYYY-MM-DDTHH:mm:ss.sssZ".
             */
            updatedAt?: string; // date-time
            /**
             * Date and time when the task is due. In format "YYYY-MM-DDTHH:mm:ss.sssZ".
             */
            dueAt?: string; // date-time
            /**
             * Date and time when the task was completed. In format "YYYY-MM-DDTHH:mm:ss.sssZ".
             */
            completedAt?: string; // date-time
        }
        export interface WhiteboardCreateRequest {
            /**
             * ID of the space.
             */
            spaceId: string;
            /**
             * Title of the whiteboard.
             */
            title?: string;
            /**
             * The parent content ID of the whiteboard.
             */
            parentId?: string;
            /**
             * Providing a template key will add that template to the new whiteboard.
             */
            templateKey?: "2x2-prioritization" | "4ls-retro" | "annual-calendar" | "brainwriting" | "concept-map" | "crazy-8s" | "daily-sync" | "disruptive-brainstorm" | "dot-voting" | "elevator-pitch" | "flow-chart" | "gap-analysis" | "ice-breakers" | "incident-postmortem" | "journey-mapping-kit" | "kanban-board" | "lean-coffee" | "network-of-teams" | "org-chart" | "pi-planning" | "prioritization" | "prioritization-experiment" | "product-roadmap" | "product-vision-board" | "rice" | "sailboat-retro" | "service-blueprint" | "simple-retrospective" | "sprint-planning" | "sticky-note-pack" | "swimlanes" | "team-formation-guide" | "timeline" | "timeline-workflow" | "user-story-map" | "workflow" | "vision-board" | "venn-diagram" | "storyboard" | "action-plan" | "root-cause-analysis" | "executive-summary" | "stakeholder-mapping" | "annual-calendar-2025-2026" | "health-monitor" | "okr-planning" | "swot-analysis" | "poker-planning" | "fishbone-diagram" | "risk-assessment" | "bounded-context" | "hopes-and-fears" | "swimlane-vertical";
            /**
             * If templateKey is provided, locale will decide which language the template will be created with. If locale is omitted, the user's locale will be used.
             */
            locale?: "de-DE" | "cs-CZ" | "ko-KR" | "fr-FR" | "it-IT" | "ja-JP" | "nl-NL" | "nb-NO" | "da-DK" | "sv-SE" | "fi-FI" | "ru-RU" | "pl-PL" | "tr-TR" | "hu-HU" | "en-GB" | "en-US" | "pt-BR" | "zh-CN" | "zh-TW" | "es-ES";
        }
    }
    namespace Schemas {
        export interface AbstractPageLinks {
            /**
             * Web UI link of the content.
             */
            webui?: string;
            /**
             * Edit UI link of the content.
             */
            editui?: string;
            /**
             * Web UI link of the content.
             */
            tinyui?: string;
        }
        /**
         * The account status of the user.
         */
        export type AccountStatus = "active" | "inactive" | "closed" | "unknown";
        /**
         * The account type of the user.
         */
        export type AccountType = "atlassian" | "app" | "customer" | "unknown";
        export interface AdminKeyResponse {
            /**
             * User identifier.
             */
            accountId?: string;
            /**
             * Timestamp in UTC that represents when the admin key will expire. In format "YYYY-MM-DDTHH:mm:ss.sssZ".
             */
            expirationTime?: string; // date-time
        }
        export interface Ancestor {
            /**
             * ID of the ancestor
             */
            id?: string;
            type?: /* The type of ancestor. */ AncestorType;
        }
        /**
         * The type of ancestor.
         */
        export type AncestorType = "page" | "whiteboard" | "database" | "embed" | "folder";
        export interface AttachmentBulk {
            /**
             * ID of the attachment.
             */
            id?: string;
            status?: /* The status of the content. */ ContentStatus;
            /**
             * Title of the comment.
             */
            title?: string;
            /**
             * Date and time when the attachment was created. In format "YYYY-MM-DDTHH:mm:ss.sssZ".
             */
            createdAt?: string; // date-time
            /**
             * ID of the containing page.
             *
             * Note: This is only returned if the attachment has a container that is a page.
             */
            pageId?: string;
            /**
             * ID of the containing blog post.
             *
             * Note: This is only returned if the attachment has a container that is a blog post.
             */
            blogPostId?: string;
            /**
             * ID of the containing custom content.
             *
             * Note: This is only returned if the attachment has a container that is custom content.
             */
            customContentId?: string;
            /**
             * Media Type for the attachment.
             */
            mediaType?: string;
            /**
             * Media Type description for the attachment.
             */
            mediaTypeDescription?: string;
            /**
             * Comment for the attachment.
             */
            comment?: string;
            /**
             * File ID of the attachment. This is the ID referenced in `atlas_doc_format` bodies and is distinct from the attachment ID.
             */
            fileId?: string;
            /**
             * File size of the attachment.
             */
            fileSize?: number; // int64
            /**
             * WebUI link of the attachment.
             */
            webuiLink?: string;
            /**
             * Download link of the attachment.
             */
            downloadLink?: string;
            version?: Version;
            _links?: AttachmentLinks;
        }
        export interface AttachmentCommentModel {
            /**
             * ID of the comment.
             */
            id?: string;
            status?: /* The status of the content. */ ContentStatus;
            /**
             * Title of the comment.
             */
            title?: string;
            /**
             * ID of the attachment containing the comment.
             */
            attachmentId?: string;
            version?: Version;
            body?: /* Contains fields for each representation type requested. */ BodySingle;
            _links?: CommentLinks;
        }
        export interface AttachmentLinks {
            /**
             * Web UI link of the content.
             */
            webui?: string;
            /**
             * Download link of the content.
             */
            download?: string;
        }
        export interface AttachmentSingle {
            /**
             * ID of the attachment.
             */
            id?: string;
            status?: /* The status of the content. */ ContentStatus;
            /**
             * Title of the comment.
             */
            title?: string;
            /**
             * Date and time when the attachment was created. In format "YYYY-MM-DDTHH:mm:ss.sssZ".
             */
            createdAt?: string; // date-time
            /**
             * ID of the containing page.
             *
             * Note: This is only returned if the attachment has a container that is a page.
             */
            pageId?: string;
            /**
             * ID of the containing blog post.
             *
             * Note: This is only returned if the attachment has a container that is a blog post.
             */
            blogPostId?: string;
            /**
             * ID of the containing custom content.
             *
             * Note: This is only returned if the attachment has a container that is custom content.
             */
            customContentId?: string;
            /**
             * Media Type for the attachment.
             */
            mediaType?: string;
            /**
             * Media Type description for the attachment.
             */
            mediaTypeDescription?: string;
            /**
             * Comment for the attachment.
             */
            comment?: string;
            /**
             * File ID of the attachment. This is the ID referenced in `atlas_doc_format` bodies and is distinct from the attachment ID.
             */
            fileId?: string;
            /**
             * File size of the attachment.
             */
            fileSize?: number; // int64
            /**
             * WebUI link of the attachment.
             */
            webuiLink?: string;
            /**
             * Download link of the attachment.
             */
            downloadLink?: string;
            version?: Version;
            labels?: {
                results?: Label[];
                meta?: OptionalFieldMeta;
                _links?: OptionalFieldLinks;
            };
            properties?: {
                results?: ContentProperty[];
                meta?: OptionalFieldMeta;
                _links?: OptionalFieldLinks;
            };
            operations?: {
                results?: Operation[];
                meta?: OptionalFieldMeta;
                _links?: OptionalFieldLinks;
            };
            versions?: {
                results?: Version[];
                meta?: OptionalFieldMeta;
                _links?: OptionalFieldLinks;
            };
            _links?: AttachmentLinks;
        }
        /**
         * The sort fields for attachments. The default sort direction is ascending. To sort in descending order, append a `-` character before the sort field. For example, `fieldName` or `-fieldName`.
         */
        export type AttachmentSortOrder = "created-date" | "-created-date" | "modified-date" | "-modified-date";
        export interface AttachmentVersion {
            /**
             * Date and time when the version was created. In format "YYYY-MM-DDTHH:mm:ss.sssZ".
             */
            createdAt?: string; // date-time
            /**
             * Message associated with the current version.
             */
            message?: string;
            /**
             * The version number.
             */
            number?: number; // int32
            /**
             * Describes if this version is a minor version. Email notifications and activity stream updates are not created for minor versions.
             */
            minorEdit?: boolean;
            /**
             * The account ID of the user who created this version.
             */
            authorId?: string;
            attachment?: VersionedEntity;
        }
        export interface BlogPostBodyWrite {
            /**
             * Type of content representation used for the value field.
             */
            representation?: "storage" | "atlas_doc_format" | "wiki";
            /**
             * Body of the blog post, in the format found in the representation field.
             */
            value?: string;
        }
        export interface BlogPostBulk {
            /**
             * ID of the blog post.
             */
            id?: string;
            status?: /* The status of the content. */ BlogPostContentStatus;
            /**
             * Title of the blog post.
             */
            title?: string;
            /**
             * ID of the space the blog post is in.
             */
            spaceId?: string;
            /**
             * The account ID of the user who created this blog post originally.
             */
            authorId?: string;
            /**
             * Date and time when the blog post was created. In format "YYYY-MM-DDTHH:mm:ss.sssZ".
             */
            createdAt?: string; // date-time
            version?: Version;
            body?: /* Contains fields for each representation type requested. */ BodyBulk;
            _links?: AbstractPageLinks;
        }
        export interface BlogPostCommentModel {
            /**
             * ID of the comment.
             */
            id?: string;
            status?: /* The status of the content. */ ContentStatus;
            /**
             * Title of the comment.
             */
            title?: string;
            /**
             * ID of the blog post the comment is in.
             */
            blogPostId?: string;
            version?: Version;
            body?: /* Contains fields for each representation type requested. */ BodyBulk;
            _links?: CommentLinks;
        }
        /**
         * The status of the content.
         */
        export type BlogPostContentStatus = "current" | "draft" | "historical" | "trashed" | "deleted" | "any";
        export interface BlogPostInlineCommentModel {
            /**
             * ID of the comment.
             */
            id?: string;
            status?: /* The status of the content. */ ContentStatus;
            /**
             * Title of the comment.
             */
            title?: string;
            /**
             * ID of the blog post the comment is in.
             */
            blogPostId?: string;
            version?: Version;
            body?: /* Contains fields for each representation type requested. */ BodyBulk;
            resolutionStatus?: /* Inline comment resolution status */ InlineCommentResolutionStatus;
            properties?: InlineCommentProperties;
            _links?: CommentLinks;
        }
        /**
         * Body of the blog post. Only one body format should be specified as the property
         * for this object, e.g. `storage`.
         */
        export interface BlogPostNestedBodyWrite {
            storage?: BlogPostBodyWrite;
            atlas_doc_format?: BlogPostBodyWrite;
            wiki?: BlogPostBodyWrite;
        }
        export interface BlogPostSingle {
            /**
             * ID of the blog post.
             */
            id?: string;
            status?: /* The status of the content. */ BlogPostContentStatus;
            /**
             * Title of the blog post.
             */
            title?: string;
            /**
             * ID of the space the blog post is in.
             */
            spaceId?: string;
            /**
             * The account ID of the user who created this blog post originally.
             */
            authorId?: string;
            /**
             * Date and time when the blog post was created. In format "YYYY-MM-DDTHH:mm:ss.sssZ".
             */
            createdAt?: string; // date-time
            version?: Version;
            body?: /* Contains fields for each representation type requested. */ BodySingle;
            labels?: {
                results?: Label[];
                meta?: OptionalFieldMeta;
                _links?: OptionalFieldLinks;
            };
            properties?: {
                results?: ContentProperty[];
                meta?: OptionalFieldMeta;
                _links?: OptionalFieldLinks;
            };
            operations?: {
                results?: Operation[];
                meta?: OptionalFieldMeta;
                _links?: OptionalFieldLinks;
            };
            likes?: {
                results?: Like[];
                meta?: OptionalFieldMeta;
                _links?: OptionalFieldLinks;
            };
            versions?: {
                results?: Version[];
                meta?: OptionalFieldMeta;
                _links?: OptionalFieldLinks;
            };
            /**
             * Whether the blog post has been favorited by the current user.
             */
            isFavoritedByCurrentUser?: boolean;
            _links?: AbstractPageLinks;
        }
        /**
         * The sort fields for blog posts. The default sort direction is ascending. To sort in descending order, append a `-` character before the sort field. For example, `fieldName` or `-fieldName`.
         */
        export type BlogPostSortOrder = "id" | "-id" | "created-date" | "-created-date" | "modified-date" | "-modified-date";
        export interface BlogPostVersion {
            /**
             * Date and time when the version was created. In format "YYYY-MM-DDTHH:mm:ss.sssZ".
             */
            createdAt?: string; // date-time
            /**
             * Message associated with the current version.
             */
            message?: string;
            /**
             * The version number.
             */
            number?: number; // int32
            /**
             * Describes if this version is a minor version. Email notifications and activity stream updates are not created for minor versions.
             */
            minorEdit?: boolean;
            /**
             * The account ID of the user who created this version.
             */
            authorId?: string;
            blogpost?: VersionedEntity;
        }
        /**
         * Contains fields for each representation type requested.
         */
        export interface BodyBulk {
            storage?: BodyType;
            atlas_doc_format?: BodyType;
        }
        /**
         * Contains fields for each representation type requested.
         */
        export interface BodySingle {
            storage?: BodyType;
            atlas_doc_format?: BodyType;
            view?: BodyType;
        }
        export interface BodyType {
            /**
             * Type of content representation used for the value field.
             */
            representation?: string;
            /**
             * Body of the content, in the format found in the representation field.
             */
            value?: string;
        }
        export interface ChildCustomContent {
            /**
             * ID of the child custom content.
             */
            id?: string;
            status?: /* The status of the content. */ OnlyArchivedAndCurrentContentStatus;
            /**
             * Title of the custom content.
             */
            title?: string;
            /**
             * Custom content type.
             */
            type?: string;
            /**
             * ID of the space the custom content is in.
             */
            spaceId?: string;
        }
        /**
         * The sort fields for child custom content. The default sort direction is ascending by id. To sort in descending order, append a `-` character before the sort field. For example, `fieldName` or `-fieldName`.
         */
        export type ChildCustomContentSortOrder = "created-date" | "-created-date" | "id" | "-id" | "modified-date" | "-modified-date";
        export interface ChildPage {
            /**
             * ID of the page.
             */
            id?: string;
            status?: /* The status of the content. */ OnlyArchivedAndCurrentContentStatus;
            /**
             * Title of the page.
             */
            title?: string;
            /**
             * ID of the space the page is in.
             */
            spaceId?: string;
            /**
             * Position of child page within the given parent page tree.
             */
            childPosition?: number | null; // int32
        }
        /**
         * The sort fields for child pages. The default sort direction is ascending by child-position. To sort in descending order, append a `-` character before the sort field. For example, `fieldName` or `-fieldName`.
         */
        export type ChildPageSortOrder = "created-date" | "-created-date" | "id" | "-id" | "child-position" | "-child-position" | "modified-date" | "-modified-date";
        export interface ChildrenCommentModel {
            /**
             * ID of the comment.
             */
            id?: string;
            status?: /* The status of the content. */ ContentStatus;
            /**
             * Title of the comment.
             */
            title?: string;
            /**
             * ID of the parent comment the child comment is in.
             */
            parentCommentId?: string;
            version?: Version;
            body?: /* Contains fields for each representation type requested. */ BodyBulk;
            _links?: CommentLinks;
        }
        export interface ChildrenResponse {
            /**
             * ID of the child content.
             */
            id?: string;
            status?: /* The status of the content. */ OnlyArchivedAndCurrentContentStatus;
            /**
             * Title of the child content.
             */
            title?: string;
            /**
             * Hierarchical content type (database/embed/folder/page/whiteboard).
             */
            type?: string;
            /**
             * ID of the space the content is in.
             */
            spaceId?: string;
            /**
             * Numerical value indicating position of the content relative to its siblings (with the same parentId) within the content tree.
             * If the content is sorted by childPosition, it will reflect the default content ordering within the content tree.
             */
            childPosition?: number | null; // int32
        }
        /**
         * ClassificationLevel
         * A unit of [data classification](https://support.atlassian.com/security-and-access-policies/docs/what-is-data-classification/) defined by an organiation.
         * A classification level may be associated with specific storage and handling requirements or expectations.
         */
        export interface ClassificationLevel {
            /**
             * The ID of the classification level.
             */
            id?: string;
            /**
             * The status of the classification level.
             */
            status?: ClassificationLevelStatus;
            /**
             * The order of the classification level object.
             */
            order?: number;
            /**
             * The name of the classification level object.
             */
            name?: string;
            /**
             * The description of the classification level object.
             */
            description?: string;
            /**
             * The guideline of the classification level object.
             */
            guideline?: string;
            /**
             * The color of the classification level object.
             */
            color?: ClassificationLevelColor;
        }
        export type ClassificationLevelColor = "RED" | "RED_BOLD" | "ORANGE" | "YELLOW" | "GREEN" | "BLUE" | "NAVY" | "TEAL" | "PURPLE" | "GREY" | "LIME";
        export type ClassificationLevelStatus = "DRAFT" | "PUBLISHED" | "ARCHIVED";
        export interface CommentBodyWrite {
            /**
             * Type of content representation used for the value field.
             */
            representation?: "storage" | "atlas_doc_format" | "wiki";
            /**
             * Body of the comment, in the format found in the representation field.
             */
            value?: string;
        }
        export interface CommentLinks {
            /**
             * Web UI link of the content.
             */
            webui?: string;
        }
        /**
         * Body of the comment. Only one body format should be specified as the property
         * for this object, e.g. `storage`.
         */
        export interface CommentNestedBodyWrite {
            storage?: CommentBodyWrite;
            atlas_doc_format?: CommentBodyWrite;
            wiki?: CommentBodyWrite;
        }
        /**
         * The sort fields for comments. The default sort direction is ascending. To sort in descending order, append a `-` character before the sort field. For example, `fieldName` or `-fieldName`.
         */
        export type CommentSortOrder = "created-date" | "-created-date" | "modified-date" | "-modified-date";
        export interface CommentVersion {
            /**
             * Date and time when the version was created. In format "YYYY-MM-DDTHH:mm:ss.sssZ".
             */
            createdAt?: string; // date-time
            /**
             * Message associated with the current version.
             */
            message?: string;
            /**
             * The version number.
             */
            number?: number; // int32
            /**
             * Describes if this version is a minor version. Email notifications and activity stream updates are not created for minor versions.
             */
            minorEdit?: boolean;
            /**
             * The account ID of the user who created this version.
             */
            authorId?: string;
            comment?: VersionedEntity;
        }
        export interface ContentIdToContentTypeResponse {
            /**
             * JSON object containing all requested content ids as keys and their associated content types as the values.
             * Duplicate content ids in the request will be returned under a single key in the response. For built-in content
             * types, the enumerations are as specified. Custom content ids will be mapped to their associated type.
             */
            results?: {
                [name: string]: ("page" | "blogpost" | "attachment" | "footer-comment" | "inline-comment") | string;
            };
        }
        export interface ContentProperty {
            /**
             * ID of the property
             */
            id?: string;
            /**
             * Key of the property
             */
            key?: string;
            /**
             * Value of the property. Must be a valid JSON value.
             */
            value?: any;
            version?: Version;
        }
        export interface ContentPropertyCreateRequest {
            /**
             * Key of the content property
             */
            key?: string;
            /**
             * Value of the content property.
             */
            value?: any;
        }
        /**
         * The sort fields for content properties. The default sort direction is ascending. To sort in descending order, append a `-` character before the sort field. For example, `fieldName` or `-fieldName`.
         */
        export type ContentPropertySortOrder = "key" | "-key";
        export interface ContentPropertyUpdateRequest {
            /**
             * Key of the content property
             */
            key?: string;
            /**
             * Value of the content property.
             */
            value?: any;
            /**
             * New version number and associated message
             */
            version?: {
                /**
                 * Version number of the new version. Should be 1 more than the current version number.
                 */
                number?: number; // int32
                /**
                 * Message to be associated with the new version.
                 */
                message?: string;
            };
        }
        /**
         * The sort fields for hierarchical content types. The default sort direction is ascending. To sort in descending order, append a `-` character before the sort field. For example, `fieldName` or `-fieldName`.
         */
        export type ContentSortOrder = "created-date" | "-created-date" | "id" | "-id" | "modified-date" | "-modified-date" | "child-position" | "-child-position" | "title" | "-title";
        /**
         * The status of the content.
         */
        export type ContentStatus = "current" | "draft" | "archived" | "historical" | "trashed" | "deleted" | "any";
        export interface CreateFooterCommentModel {
            /**
             * ID of the containing blog post, if intending to create a top level footer comment. Do not provide if creating a reply.
             */
            blogPostId?: string;
            /**
             * ID of the containing page, if intending to create a top level footer comment. Do not provide if creating a reply.
             */
            pageId?: string;
            /**
             * ID of the parent comment, if intending to create a reply. Do not provide if creating a top level comment.
             */
            parentCommentId?: string;
            /**
             * ID of the attachment, if intending to create a comment against an attachment.
             */
            attachmentId?: string;
            /**
             * ID of the custom content, if intending to create a comment against a custom content.
             */
            customContentId?: string;
            body?: CommentBodyWrite | /**
             * Body of the comment. Only one body format should be specified as the property
             * for this object, e.g. `storage`.
             */
            CommentNestedBodyWrite;
        }
        export interface CreateInlineCommentModel {
            /**
             * ID of the containing blog post, if intending to create a top level footer comment. Do not provide if creating a reply.
             */
            blogPostId?: string;
            /**
             * ID of the containing page, if intending to create a top level footer comment. Do not provide if creating a reply.
             */
            pageId?: string;
            /**
             * ID of the parent comment, if intending to create a reply. Do not provide if creating a top level comment.
             */
            parentCommentId?: string;
            body?: CommentBodyWrite | /**
             * Body of the comment. Only one body format should be specified as the property
             * for this object, e.g. `storage`.
             */
            CommentNestedBodyWrite;
            /**
             * Object describing the text to highlight on the page/blog post. Only applicable for top level inline comments (not replies) and required in that case.
             */
            inlineCommentProperties?: {
                /**
                 * The text to highlight
                 */
                textSelection?: string;
                /**
                 * The number of matches for the selected text on the page (should be strictly greater than textSelectionMatchIndex)
                 */
                textSelectionMatchCount?: number;
                /**
                 * The match index to highlight. This is zero-based. E.g. if you have 3 occurrences of "hello world" on a page
                 * and you want to highlight the second occurrence, you should pass 1 for textSelectionMatchIndex and 3 for textSelectionMatchCount.
                 */
                textSelectionMatchIndex?: number;
            };
        }
        /**
         * Contains fields for each representation type requested.
         */
        export interface CustomContentBodyBulk {
            raw?: BodyType;
            storage?: BodyType;
            atlas_doc_format?: BodyType;
        }
        /**
         * The formats a custom content body can be represented as. A subset of BodyRepresentation.
         */
        export type CustomContentBodyRepresentation = "raw" | "storage" | "atlas_doc_format";
        /**
         * The formats a custom content body can be represented as. A subset of BodyRepresentation.
         */
        export type CustomContentBodyRepresentationSingle = "raw" | "storage" | "atlas_doc_format" | "view" | "export_view" | "anonymous_export_view";
        /**
         * Contains fields for each representation type requested.
         */
        export interface CustomContentBodySingle {
            raw?: BodyType;
            storage?: BodyType;
            atlas_doc_format?: BodyType;
            view?: BodyType;
        }
        export interface CustomContentBodyWrite {
            /**
             * Type of content representation used for the value field.
             */
            representation?: "storage" | "atlas_doc_format" | "raw";
            /**
             * Body of the custom content, in the format found in the representation field.
             */
            value?: string;
        }
        export interface CustomContentBulk {
            /**
             * ID of the custom content.
             */
            id?: string;
            /**
             * The type of custom content.
             */
            type?: string;
            status?: /* The status of the content. */ ContentStatus;
            /**
             * Title of the custom content.
             */
            title?: string;
            /**
             * ID of the space the custom content is in.
             *
             * Note: This is always returned, regardless of if the custom content has a container that is a space.
             */
            spaceId?: string;
            /**
             * ID of the containing page.
             *
             * Note: This is only returned if the custom content has a container that is a page.
             */
            pageId?: string;
            /**
             * ID of the containing blog post.
             *
             * Note: This is only returned if the custom content has a container that is a blog post.
             */
            blogPostId?: string;
            /**
             * ID of the containing custom content.
             *
             * Note: This is only returned if the custom content has a container that is custom content.
             */
            customContentId?: string;
            /**
             * The account ID of the user who created this custom content originally.
             */
            authorId?: string;
            /**
             * Date and time when the custom content was created. In format "YYYY-MM-DDTHH:mm:ss.sssZ".
             */
            createdAt?: string; // date-time
            version?: Version;
            body?: /* Contains fields for each representation type requested. */ CustomContentBodyBulk;
            _links?: CustomContentLinks;
        }
        export interface CustomContentCommentModel {
            /**
             * ID of the comment.
             */
            id?: string;
            status?: /* The status of the content. */ ContentStatus;
            /**
             * Title of the comment.
             */
            title?: string;
            /**
             * ID of the custom content containing the comment.
             */
            customContentId?: string;
            version?: Version;
            body?: /* Contains fields for each representation type requested. */ BodySingle;
            _links?: CommentLinks;
        }
        export interface CustomContentLinks {
            /**
             * Web UI link of the content.
             */
            webui?: string;
        }
        /**
         * Body of the custom content. Only one body format should be specified as the property
         * for this object, e.g. `storage`.
         */
        export interface CustomContentNestedBodyWrite {
            storage?: CustomContentBodyWrite;
            atlas_doc_format?: CustomContentBodyWrite;
            raw?: CustomContentBodyWrite;
        }
        export interface CustomContentSingle {
            /**
             * ID of the custom content.
             */
            id?: string;
            /**
             * The type of custom content.
             */
            type?: string;
            status?: /* The status of the content. */ ContentStatus;
            /**
             * Title of the custom content.
             */
            title?: string;
            /**
             * ID of the space the custom content is in.
             *
             * Note: This is always returned, regardless of if the custom content has a container that is a space.
             */
            spaceId?: string;
            /**
             * ID of the containing page.
             *
             * Note: This is only returned if the custom content has a container that is a page.
             */
            pageId?: string;
            /**
             * ID of the containing blog post.
             *
             * Note: This is only returned if the custom content has a container that is a blog post.
             */
            blogPostId?: string;
            /**
             * ID of the containing custom content.
             *
             * Note: This is only returned if the custom content has a container that is custom content.
             */
            customContentId?: string;
            /**
             * The account ID of the user who created this custom content originally.
             */
            authorId?: string;
            /**
             * Date and time when the custom content was created. In format "YYYY-MM-DDTHH:mm:ss.sssZ".
             */
            createdAt?: string; // date-time
            version?: Version;
            labels?: {
                results?: Label[];
                meta?: OptionalFieldMeta;
                _links?: OptionalFieldLinks;
            };
            properties?: {
                results?: ContentProperty[];
                meta?: OptionalFieldMeta;
                _links?: OptionalFieldLinks;
            };
            operations?: {
                results?: Operation[];
                meta?: OptionalFieldMeta;
                _links?: OptionalFieldLinks;
            };
            versions?: {
                results?: Version[];
                meta?: OptionalFieldMeta;
                _links?: OptionalFieldLinks;
            };
            body?: /* Contains fields for each representation type requested. */ CustomContentBodySingle;
            _links?: CustomContentLinks;
        }
        /**
         * The sort fields for custom content. The default sort direction is ascending. To sort in descending order, append a `-` character before the sort field. For example, `fieldName` or `-fieldName`.
         */
        export type CustomContentSortOrder = "id" | "-id" | "created-date" | "-created-date" | "modified-date" | "-modified-date" | "title" | "-title";
        export interface CustomContentVersion {
            /**
             * Date and time when the version was created. In format "YYYY-MM-DDTHH:mm:ss.sssZ".
             */
            createdAt?: string; // date-time
            /**
             * Message associated with the current version.
             */
            message?: string;
            /**
             * The version number.
             */
            number?: number; // int32
            /**
             * Describes if this version is a minor version. Email notifications and activity stream updates are not created for minor versions.
             */
            minorEdit?: boolean;
            /**
             * The account ID of the user who created this version.
             */
            authorId?: string;
            custom?: VersionedEntity;
        }
        /**
         * Details about data policies.
         */
        export interface DataPolicyMetadata {
            /**
             * Whether the workspace contains any content blocked for (inaccessible to) the requesting client application.
             */
            anyContentBlocked?: boolean;
        }
        export interface DataPolicySpace {
            /**
             * ID of the space.
             */
            id?: string;
            /**
             * Key of the space.
             */
            key?: string;
            /**
             * Name of the space.
             */
            name?: string;
            description?: /* Contains fields for each representation type requested. */ SpaceDescription;
            dataPolicy?: {
                /**
                 * Whether the space contains any content blocked for (inaccessible to) the requesting client application.
                 */
                anyContentBlocked?: boolean;
            };
            icon?: /* The icon of the space */ SpaceIcon;
            _links?: SpaceLinks;
        }
        export interface DatabaseLinks {
            /**
             * Web UI link of the content.
             */
            webui?: string;
        }
        export interface DatabaseSingle {
            /**
             * ID of the database.
             */
            id?: string;
            /**
             * The content type of the object.
             */
            type?: string;
            status?: /* The status of the content. */ ContentStatus;
            /**
             * Title of the database.
             */
            title?: string;
            /**
             * ID of the parent content, or null if there is no parent content.
             */
            parentId?: string;
            parentType?: /* Content type of the parent, or null if there is no parent. */ ParentContentType;
            /**
             * Position of the database within the given parent page tree.
             */
            position?: number | null; // int32
            /**
             * The account ID of the user who created this database originally.
             */
            authorId?: string;
            /**
             * The account ID of the user who owns this database.
             */
            ownerId?: string;
            /**
             * Date and time when the database was created. In format "YYYY-MM-DDTHH:mm:ss.sssZ".
             */
            createdAt?: string; // date-time
            /**
             * ID of the space the database is in.
             */
            spaceId?: string;
            version?: Version;
            _links?: DatabaseLinks;
        }
        export interface DeleteSpaceRoleResponse {
            /**
             * Id of the task to update the space permissions associated with the space role
             */
            taskId?: string;
        }
        export interface DescendantsResponse {
            /**
             * ID of the descendant.
             */
            id?: string;
            status?: /* The status of the content. */ OnlyArchivedAndCurrentContentStatus;
            /**
             * Title of the descendant.
             */
            title?: string;
            /**
             * Hierarchical content type (database/embed/folder/page/whiteboard).
             */
            type?: string;
            /**
             * ID of the parent content.
             */
            parentId?: string;
            /**
             * Depth of the descendant in the content tree relative to the content specified in the request.
             */
            depth?: number; // int32
            /**
             * Numerical value indicating position of the content relative to its siblings (with the same parentId) within the content tree.
             * If the content is sorted by childPosition, it will reflect the default content ordering within the content tree.
             */
            childPosition?: number | null; // int32
        }
        export interface DetailedVersion {
            /**
             * The current version number.
             */
            number?: number; // int32
            /**
             * The account ID of the user who created this version.
             */
            authorId?: string;
            /**
             * Message associated with the current version.
             */
            message?: string;
            /**
             * Date and time when the version was created. In format "YYYY-MM-DDTHH:mm:ss.sssZ".
             */
            createdAt?: string; // date-time
            /**
             * Describes if this version is a minor version. Email notifications and activity stream updates are not created for minor versions.
             */
            minorEdit?: boolean;
            /**
             * Describes if the content type is modified in this version (e.g. page to blog)
             */
            contentTypeModified?: boolean;
            /**
             * The account IDs of users that collaborated on this version.
             */
            collaborators?: string[];
            /**
             * The version number of the version prior to this current content update.
             */
            prevVersion?: number; // int32
            /**
             * The version number of the version after this current content update.
             */
            nextVersion?: number; // int32
        }
        export interface FolderLinks {
            /**
             * Web UI link of the content.
             */
            webui?: string;
        }
        export interface FolderSingle {
            /**
             * ID of the folder.
             */
            id?: string;
            /**
             * The content type of the object.
             */
            type?: string;
            status?: /* The status of the content. */ ContentStatus;
            /**
             * Title of the folder.
             */
            title?: string;
            /**
             * ID of the parent content, or null if there is no parent content.
             */
            parentId?: string;
            parentType?: /* Content type of the parent, or null if there is no parent. */ ParentContentType;
            /**
             * Position of the folder within the given parent page tree.
             */
            position?: number | null; // int32
            /**
             * The account ID of the user who created this folder.
             */
            authorId?: string;
            /**
             * The account ID of the user who owns this folder.
             */
            ownerId?: string;
            /**
             * Date and time when the folder was created. In format "YYYY-MM-DDTHH:mm:ss.sssZ".
             */
            createdAt?: string; // date-time
            /**
             * ID of the space the folder is in.
             */
            spaceId?: string;
            version?: Version;
            _links?: FolderLinks;
        }
        export interface FooterCommentModel {
            /**
             * ID of the comment.
             */
            id?: string;
            status?: /* The status of the content. */ ContentStatus;
            /**
             * Title of the comment.
             */
            title?: string;
            /**
             * ID of the blog post containing the comment if the comment is on a blog post.
             */
            blogPostId?: string;
            /**
             * ID of the page containing the comment if the comment is on a page.
             */
            pageId?: string;
            /**
             * ID of the attachment containing the comment if the comment is on an attachment.
             */
            attachmentId?: string;
            /**
             * ID of the custom content containing the comment if the comment is on a custom content.
             */
            customContentId?: string;
            /**
             * ID of the parent comment if the comment is a reply.
             */
            parentCommentId?: string;
            version?: Version;
            properties?: {
                results?: ContentProperty[];
                meta?: OptionalFieldMeta;
                _links?: OptionalFieldLinks;
            };
            operations?: {
                results?: Operation[];
                meta?: OptionalFieldMeta;
                _links?: OptionalFieldLinks;
            };
            likes?: {
                results?: Like[];
                meta?: OptionalFieldMeta;
                _links?: OptionalFieldLinks;
            };
            versions?: {
                results?: Version[];
                meta?: OptionalFieldMeta;
                _links?: OptionalFieldLinks;
            };
            body?: /* Contains fields for each representation type requested. */ BodySingle;
            _links?: CommentLinks;
        }
        /**
         * This object represents an icon. If used as a profilePicture, this may be returned as null, depending on the user's privacy setting.
         */
        export type Icon = {
            path: string;
            isDefault: boolean;
        } | null;
        export interface InlineCommentChildrenModel {
            /**
             * ID of the comment.
             */
            id?: string;
            status?: /* The status of the content. */ ContentStatus;
            /**
             * Title of the comment.
             */
            title?: string;
            /**
             * ID of the parent comment the child comment is in.
             */
            parentCommentId?: string;
            version?: Version;
            body?: /* Contains fields for each representation type requested. */ BodyBulk;
            resolutionStatus?: /* Inline comment resolution status */ InlineCommentResolutionStatus;
            properties?: InlineCommentProperties;
            _links?: CommentLinks;
        }
        export interface InlineCommentModel {
            /**
             * ID of the comment.
             */
            id?: string;
            status?: /* The status of the content. */ ContentStatus;
            /**
             * Title of the comment.
             */
            title?: string;
            /**
             * ID of the blog post containing the comment if the comment is on a blog post.
             */
            blogPostId?: string;
            /**
             * ID of the page containing the comment if the comment is on a page.
             */
            pageId?: string;
            /**
             * ID of the parent comment if the comment is a reply.
             */
            parentCommentId?: string;
            version?: Version;
            body?: /* Contains fields for each representation type requested. */ BodySingle;
            /**
             * Atlassian Account ID of last person who modified the resolve state of the comment. Null until comment is resolved or reopened.
             */
            resolutionLastModifierId?: string;
            /**
             * Timestamp of the last modification to the comment's resolution status. Null until comment is resolved or reopened.
             */
            resolutionLastModifiedAt?: string; // date-time
            resolutionStatus?: /* Inline comment resolution status */ InlineCommentResolutionStatus;
            properties?: {
                results?: ContentProperty[];
                meta?: OptionalFieldMeta;
                _links?: OptionalFieldLinks;
                /**
                 * Property value used to reference the highlighted element in DOM.
                 */
                inlineMarkerRef?: string;
                /**
                 * Text that is highlighted.
                 */
                inlineOriginalSelection?: string;
            };
            operations?: {
                results?: Operation[];
                meta?: OptionalFieldMeta;
                _links?: OptionalFieldLinks;
            };
            likes?: {
                results?: Like[];
                meta?: OptionalFieldMeta;
                _links?: OptionalFieldLinks;
            };
            versions?: {
                results?: Version[];
                meta?: OptionalFieldMeta;
                _links?: OptionalFieldLinks;
            };
            _links?: CommentLinks;
        }
        export interface InlineCommentProperties {
            /**
             * Property value used to reference the highlighted element in DOM.
             */
            inlineMarkerRef?: string;
            /**
             * Text that is highlighted.
             */
            inlineOriginalSelection?: string;
        }
        /**
         * Inline comment resolution status
         */
        export type InlineCommentResolutionStatus = "open" | "reopened" | "resolved" | "dangling";
        export interface Label {
            /**
             * ID of the label.
             */
            id?: string;
            /**
             * Name of the label.
             */
            name?: string;
            /**
             * Prefix of the label.
             */
            prefix?: string;
        }
        /**
         * The sort fields for labels. The default sort direction is ascending. To sort in descending order, append a `-` character before the sort field. For example, `fieldName` or `-fieldName`.
         */
        export type LabelSortOrder = "created-date" | "-created-date" | "id" | "-id" | "name" | "-name";
        export interface Like {
            /**
             * Account ID.
             */
            accountId?: string;
        }
        export interface MultiEntityLinks {
            /**
             * Used for pagination. Contains the relative URL for the next set of results, using a cursor query parameter.
             * This property will not be present if there is no additional data available.
             */
            next?: string;
            /**
             * Base url of the Confluence site.
             */
            base?: string;
        }
        /**
         * The status of the content.
         */
        export type OnlyArchivedAndCurrentContentStatus = "current" | "archived";
        export interface Operation {
            /**
             * The type of operation.
             */
            operation?: string;
            /**
             * The type of entity the operation type targets.
             */
            targetType?: string;
        }
        export interface OptionalFieldLinks {
            /**
             * A relative URL that can be used to fetch results beyond what this include parameter retrieves.
             */
            self?: string;
        }
        export interface OptionalFieldMeta {
            /**
             * Indicates if there are more available results that can be fetched.
             */
            hasMore?: boolean;
            /**
             * A token that can be used in the query parameter of the endpoint returned in the `_links` property to retrieve the next set of results.
             */
            cursor?: string;
        }
        export interface PageBodyWrite {
            /**
             * Type of content representation used for the value field.
             */
            representation?: "storage" | "atlas_doc_format" | "wiki";
            /**
             * Body of the page, in the format found in the representation field.
             */
            value?: string;
        }
        export interface PageBulk {
            /**
             * ID of the page.
             */
            id?: string;
            status?: /* The status of the content. */ ContentStatus;
            /**
             * Title of the page.
             */
            title?: string;
            /**
             * ID of the space the page is in.
             */
            spaceId?: string;
            /**
             * ID of the parent page, or null if there is no parent page.
             */
            parentId?: string;
            parentType?: /* Content type of the parent, or null if there is no parent. */ ParentContentType;
            /**
             * Position of child page within the given parent page tree.
             */
            position?: number | null; // int32
            /**
             * The account ID of the user who created this page originally.
             */
            authorId?: string;
            /**
             * The account ID of the user who owns this page.
             */
            ownerId?: string | null;
            /**
             * The account ID of the user who owned this page previously, or null if there is no previous owner.
             */
            lastOwnerId?: string | null;
            /**
             * The subtype of the page.
             */
            subtype?: string | null;
            /**
             * Date and time when the page was created. In format "YYYY-MM-DDTHH:mm:ss.sssZ".
             */
            createdAt?: string; // date-time
            version?: Version;
            body?: /* Contains fields for each representation type requested. */ BodyBulk;
            _links?: AbstractPageLinks;
        }
        export interface PageCommentModel {
            /**
             * ID of the comment.
             */
            id?: string;
            status?: /* The status of the content. */ ContentStatus;
            /**
             * Title of the comment.
             */
            title?: string;
            /**
             * ID of the page the comment is in.
             */
            pageId?: string;
            version?: Version;
            body?: /* Contains fields for each representation type requested. */ BodyBulk;
            _links?: CommentLinks;
        }
        export interface PageInlineCommentModel {
            /**
             * ID of the comment.
             */
            id?: string;
            status?: /* The status of the content. */ ContentStatus;
            /**
             * Title of the comment.
             */
            title?: string;
            /**
             * ID of the page the comment is in.
             */
            pageId?: string;
            version?: Version;
            body?: /* Contains fields for each representation type requested. */ BodyBulk;
            resolutionStatus?: /* Inline comment resolution status */ InlineCommentResolutionStatus;
            properties?: InlineCommentProperties;
            _links?: CommentLinks;
        }
        /**
         * Body of the page. Only one body format should be specified as the property
         * for this object, e.g. `storage`.
         */
        export interface PageNestedBodyWrite {
            storage?: PageBodyWrite;
            atlas_doc_format?: PageBodyWrite;
            wiki?: PageBodyWrite;
        }
        export interface PageSingle {
            /**
             * ID of the page.
             */
            id?: string;
            status?: /* The status of the content. */ ContentStatus;
            /**
             * Title of the page.
             */
            title?: string;
            /**
             * ID of the space the page is in.
             */
            spaceId?: string;
            /**
             * ID of the parent page, or null if there is no parent page.
             */
            parentId?: string;
            parentType?: /* Content type of the parent, or null if there is no parent. */ ParentContentType;
            /**
             * Position of child page within the given parent page tree.
             */
            position?: number | null; // int32
            /**
             * The account ID of the user who created this page originally.
             */
            authorId?: string;
            /**
             * The account ID of the user who owns this page.
             */
            ownerId?: string | null;
            /**
             * The account ID of the user who owned this page previously, or null if there is no previous owner.
             */
            lastOwnerId?: string | null;
            /**
             * Date and time when the page was created. In format "YYYY-MM-DDTHH:mm:ss.sssZ".
             */
            createdAt?: string; // date-time
            version?: Version;
            body?: /* Contains fields for each representation type requested. */ BodySingle;
            labels?: {
                results?: Label[];
                meta?: OptionalFieldMeta;
                _links?: OptionalFieldLinks;
            };
            properties?: {
                results?: ContentProperty[];
                meta?: OptionalFieldMeta;
                _links?: OptionalFieldLinks;
            };
            operations?: {
                results?: Operation[];
                meta?: OptionalFieldMeta;
                _links?: OptionalFieldLinks;
            };
            likes?: {
                results?: Like[];
                meta?: OptionalFieldMeta;
                _links?: OptionalFieldLinks;
            };
            versions?: {
                results?: Version[];
                meta?: OptionalFieldMeta;
                _links?: OptionalFieldLinks;
            };
            /**
             * Whether the page has been favorited by the current user.
             */
            isFavoritedByCurrentUser?: boolean;
            _links?: AbstractPageLinks;
        }
        /**
         * The sort fields for pages. The default sort direction is ascending. To sort in descending order, append a `-` character before the sort field. For example, `fieldName` or `-fieldName`.
         */
        export type PageSortOrder = "id" | "-id" | "created-date" | "-created-date" | "modified-date" | "-modified-date" | "title" | "-title";
        export interface PageVersion {
            /**
             * Date and time when the version was created. In format "YYYY-MM-DDTHH:mm:ss.sssZ".
             */
            createdAt?: string; // date-time
            /**
             * Message associated with the current version.
             */
            message?: string;
            /**
             * The version number.
             */
            number?: number; // int32
            /**
             * Describes if this version is a minor version. Email notifications and activity stream updates are not created for minor versions.
             */
            minorEdit?: boolean;
            /**
             * The account ID of the user who created this version.
             */
            authorId?: string;
            page?: VersionedEntity;
        }
        /**
         * Content type of the parent, or null if there is no parent.
         */
        export type ParentContentType = "page" | "whiteboard" | "database" | "embed" | "folder";
        /**
         * The list of operations permitted on entity.
         */
        export interface PermittedOperationsResponse {
            operations?: Operation[];
        }
        /**
         * The primary formats a body can be represented as. A subset of BodyRepresentation. These formats are the only allowed formats in certain use cases.
         */
        export type PrimaryBodyRepresentation = "storage" | "atlas_doc_format";
        /**
         * The primary formats a body can be represented as. A subset of BodyRepresentation. These formats are the only allowed formats in certain use cases.
         */
        export type PrimaryBodyRepresentationSingle = "storage" | "atlas_doc_format" | "view" | "export_view" | "anonymous_export_view" | "styled_view" | "editor";
        /**
         * The principal of the role assignment.
         */
        export interface Principal {
            principalType?: /* The principal type. */ PrincipalType;
            /**
             * The principal ID.
             */
            principalId?: string;
        }
        /**
         * The principal type.
         */
        export type PrincipalType = "USER" | "GROUP" | "ACCESS_CLASS";
        export interface Redaction {
            /**
             * List of specific text ranges to redact within this section
             */
            redactions?: RedactionPointer[];
        }
        export interface RedactionPointer {
            /**
             * JSON pointer indicating the exact location within the content structure
             * where redaction should be applied. Points to the text node containing the content to redact.
             *
             */
            pointer: string;
            /**
             * Starting character index (zero-based) within the target text where redaction begins.
             *
             */
            from?: number;
            /**
             * Ending character index (zero-based) within the target text where redaction ends (exclusive).
             * Must be greater than or equal to 'from' value.
             *
             */
            to?: number;
            /**
             * Optional human-readable reason for the redaction. Used for audit trails and compliance documentation.
             *
             */
            reason?: string | null;
        }
        export interface RedactionPointerResponse {
            /**
             * JSON pointer indicating where the redaction was applied
             */
            pointer?: string;
            /**
             * Starting character index where redaction was applied
             */
            from?: number;
            /**
             * Ending character index where redaction was applied
             */
            to?: number;
            /**
             * Reason for the redaction
             */
            reason?: string;
            /**
             * Unique identifier for this redaction. Can be used to restore the redacted content later.
             *
             */
            redactionId?: string; // uuid
        }
        /**
         * Response containing details of all redactions that were applied to the content.
         * Each redaction includes a unique ID for restoration, except that code block redactions cannot be restored.
         *
         */
        export interface RedactionResponse {
            body?: RedactionSectionResponse;
            title?: RedactionSectionResponse;
        }
        export interface RedactionSectionResponse {
            /**
             * List of redactions that were applied to this section
             */
            redactions?: RedactionPointerResponse[];
        }
        /**
         * The role type.
         */
        export type RoleType = "SYSTEM" | "CUSTOM";
        export interface SmartLinkLinks {
            /**
             * Web UI link of the content.
             */
            webui?: string;
        }
        export interface SmartLinkSingle {
            /**
             * ID of the Smart Link in the content tree.
             */
            id?: string;
            /**
             * The content type of the object.
             */
            type?: string;
            status?: /* The status of the content. */ ContentStatus;
            /**
             * Title of the Smart Link in the content tree.
             */
            title?: string;
            /**
             * ID of the parent content, or null if there is no parent content.
             */
            parentId?: string;
            parentType?: /* Content type of the parent, or null if there is no parent. */ ParentContentType;
            /**
             * Position of the Smart Link within the given parent page tree.
             */
            position?: number | null; // int32
            /**
             * The account ID of the user who created this Smart Link in the content tree originally.
             */
            authorId?: string;
            /**
             * The account ID of the user who owns this Smart Link in the content tree.
             */
            ownerId?: string;
            /**
             * Date and time when the Smart Link in the content tree was created. In format "YYYY-MM-DDTHH:mm:ss.sssZ".
             */
            createdAt?: string; // date-time
            /**
             * The embedded URL of the Smart Link. If the Smart Link does not have an embedded URL, this property will not be included in the response.
             */
            embedUrl?: string;
            /**
             * ID of the space the Smart Link is in.
             */
            spaceId?: string;
            version?: Version;
            _links?: SmartLinkLinks;
        }
        export interface SpaceBulk {
            /**
             * ID of the space.
             */
            id?: string;
            /**
             * Key of the space.
             */
            key?: string;
            /**
             * Name of the space.
             */
            name?: string;
            type?: /* The type of space. */ SpaceType;
            status?: /* The status of the space. */ SpaceStatus;
            /**
             * The account ID of the user who created this space originally.
             */
            authorId?: string;
            /**
             * Currently active alias for a Confluence space.
             */
            currentActiveAlias?: string;
            /**
             * Date and time when the space was created. In format "YYYY-MM-DDTHH:mm:ss.sssZ".
             */
            createdAt?: string; // date-time
            /**
             * ID of the space's homepage.
             */
            homepageId?: string;
            description?: /* Contains fields for each representation type requested. */ SpaceDescription;
            icon?: /* The icon of the space */ SpaceIcon;
            _links?: SpaceLinks;
        }
        /**
         * Contains fields for each representation type requested.
         */
        export interface SpaceDescription {
            plain?: BodyType;
            view?: BodyType;
        }
        /**
         * The formats a space description can be represented as. A subset of BodyRepresentation.
         */
        export type SpaceDescriptionBodyRepresentation = "plain" | "view";
        /**
         * The icon of the space
         */
        export interface SpaceIcon {
            /**
             * The path (relative to base URL) at which the space's icon can be retrieved. The format should be like `/wiki/download/...` or `/wiki/aa-avatar/...`
             */
            path?: string;
            /**
             * The path (relative to base URL) that can be used to retrieve a link to download the space icon. 3LO apps should use this link instead of the value provided
             * in the `path` property to retrieve the icon.
             *
             * Currently this field is only returned for `global` spaces and not `personal` spaces.
             *
             */
            apiDownloadLink?: string;
        }
        export interface SpaceLinks {
            /**
             * Web UI link of the space.
             */
            webui?: string;
        }
        export interface SpacePermission {
            /**
             * The identifier for the space permission.
             */
            id?: string;
            /**
             * The display name for the space permission.
             */
            displayName?: string;
            /**
             * Describes the space permission’s usage.
             */
            description?: string;
            /**
             * The permissions required for this permission to be enabled.
             */
            requiredPermissionIds?: string[];
        }
        export interface SpacePermissionAssignment {
            /**
             * ID of the space permission.
             */
            id?: string;
            /**
             * The entity the space permissions corresponds to.
             */
            principal?: {
                type?: "user" | "group" | "role";
                /**
                 * ID of the entity.
                 */
                id?: string;
            };
            /**
             * The operation the space permission corresponds to.
             */
            operation?: {
                /**
                 * The type of operation.
                 */
                key?: "use" | "create" | "read" | "update" | "delete" | "copy" | "move" | "export" | "purge" | "purge_version" | "administer" | "restore" | "create_space" | "restrict_content" | "archive";
                /**
                 * The type of entity the operation type targets.
                 */
                targetType?: "page" | "blogpost" | "comment" | "attachment" | "whiteboard" | "database" | "embed" | "folder" | "space" | "application" | "userProfile";
            };
        }
        export interface SpaceProperty {
            /**
             * ID of the space property.
             */
            id?: string;
            /**
             * Key of the space property.
             */
            key?: string;
            /**
             * Value of the space property.
             */
            value?: any;
            /**
             * RFC3339 compliant date time at which the property was created.
             */
            createdAt?: string; // date-time
            /**
             * Atlassian account ID of the user that created the space property.
             */
            createdBy?: string;
            version?: {
                /**
                 * RFC3339 compliant date time at which the property's current version was created.
                 */
                createdAt?: string; // date-time
                /**
                 * Atlassian account ID of the user that created the space property's current version.
                 */
                createdBy?: string;
                /**
                 * Message associated with the current version.
                 */
                message?: string;
                /**
                 * The space property's current version number.
                 */
                number?: number; // int32
            };
        }
        export interface SpacePropertyCreateRequest {
            /**
             * Key of the space property
             */
            key?: string;
            /**
             * Value of the space property.
             */
            value?: any;
        }
        export interface SpacePropertyUpdateRequest {
            /**
             * Key of the space property
             */
            key?: string;
            /**
             * Value of the space property.
             */
            value?: any;
            /**
             * New version number and associated message
             */
            version?: {
                /**
                 * Version number of the new version. Should be 1 more than the current version number.
                 */
                number?: number; // int32
                /**
                 * Message to be associated with the new version.
                 */
                message?: string;
            };
        }
        export interface SpaceRole {
            /**
             * The identifier for the space role.
             */
            id?: string;
            type?: /* The role type. */ RoleType;
            /**
             * The name for the space role.
             */
            name?: string;
            /**
             * The description for the space role’s usage.
             */
            description?: string;
            /**
             * The space permissions the space role is comprised of.
             */
            spacePermissions?: string[];
        }
        export interface SpaceRoleAssignment {
            principal?: /* The principal of the role assignment. */ Principal;
            /**
             * The role to which the principal is assigned.
             */
            roleId?: string;
        }
        export interface SpaceSingle {
            /**
             * ID of the space.
             */
            id?: string;
            /**
             * Key of the space.
             */
            key?: string;
            /**
             * Name of the space.
             */
            name?: string;
            type?: /* The type of space. */ SpaceType;
            status?: /* The status of the space. */ SpaceStatus;
            /**
             * The account ID of the user who created this space originally.
             */
            authorId?: string;
            /**
             * Date and time when the space was created. In format "YYYY-MM-DDTHH:mm:ss.sssZ".
             */
            createdAt?: string; // date-time
            /**
             * ID of the space's homepage.
             */
            homepageId?: string;
            description?: /* Contains fields for each representation type requested. */ SpaceDescription;
            icon?: /* The icon of the space */ SpaceIcon;
            labels?: {
                results?: Label[];
                meta?: OptionalFieldMeta;
                _links?: OptionalFieldLinks;
            };
            properties?: {
                results?: SpaceProperty[];
                meta?: OptionalFieldMeta;
                _links?: OptionalFieldLinks;
            };
            operations?: {
                results?: Operation[];
                meta?: OptionalFieldMeta;
                _links?: OptionalFieldLinks;
            };
            permissions?: {
                results?: SpacePermissionAssignment[];
                meta?: OptionalFieldMeta;
                _links?: OptionalFieldLinks;
            };
            _links?: SpaceLinks;
        }
        /**
         * The sort fields for spaces. The default sort direction is ascending. To sort in descending order, append a `-` character before the sort field. For example, `fieldName` or `-fieldName`.
         */
        export type SpaceSortOrder = "id" | "-id" | "key" | "-key" | "name" | "-name";
        /**
         * The status of the space.
         */
        export type SpaceStatus = "current" | "archived";
        /**
         * The type of space.
         */
        export type SpaceType = "global" | "collaboration" | "knowledge_base" | "personal" | "system" | "onboarding" | "xflow_sample_space";
        export interface Task {
            /**
             * ID of the task.
             */
            id?: string;
            /**
             * Local ID of the task. This ID is local to the corresponding page or blog post.
             */
            localId?: string;
            /**
             * ID of the space the task is in.
             */
            spaceId?: string;
            /**
             * ID of the page the task is in.
             */
            pageId?: string;
            /**
             * ID of the blog post the task is in.
             */
            blogPostId?: string;
            /**
             * Status of the task.
             */
            status?: "complete" | "incomplete";
            body?: /* Contains fields for each representation type requested. */ TaskBodySingle;
            /**
             * Account ID of the user who created this task.
             */
            createdBy?: string;
            /**
             * Account ID of the user to whom this task is assigned.
             */
            assignedTo?: string;
            /**
             * Account ID of the user who completed this task.
             */
            completedBy?: string;
            /**
             * Date and time when the task was created. In format "YYYY-MM-DDTHH:mm:ss.sssZ".
             */
            createdAt?: string; // date-time
            /**
             * Date and time when the task was updated. In format "YYYY-MM-DDTHH:mm:ss.sssZ".
             */
            updatedAt?: string; // date-time
            /**
             * Date and time when the task is due. In format "YYYY-MM-DDTHH:mm:ss.sssZ".
             */
            dueAt?: string; // date-time
            /**
             * Date and time when the task was completed. In format "YYYY-MM-DDTHH:mm:ss.sssZ".
             */
            completedAt?: string; // date-time
        }
        /**
         * Contains fields for each representation type requested.
         */
        export interface TaskBodySingle {
            storage?: BodyType;
            atlas_doc_format?: BodyType;
        }
        export interface UpdateFooterCommentModel {
            version?: {
                /**
                 * Number of new version. Should be 1 higher than current version of the comment.
                 */
                number?: number;
                /**
                 * Optional message store for the new version.
                 */
                message?: string;
            };
            body?: CommentBodyWrite | /**
             * Body of the comment. Only one body format should be specified as the property
             * for this object, e.g. `storage`.
             */
            CommentNestedBodyWrite;
        }
        export interface UpdateInlineCommentModel {
            version?: {
                /**
                 * Number of new version. Should be 1 higher than current version of the comment.
                 */
                number?: number;
                /**
                 * Optional message store for the new version.
                 */
                message?: string;
            };
            body?: CommentBodyWrite | /**
             * Body of the comment. Only one body format should be specified as the property
             * for this object, e.g. `storage`.
             */
            CommentNestedBodyWrite;
            /**
             * Resolved state of the comment. Set to true to resolve the comment, set to false to reopen it. If
             * matching the existing state (i.e. true -> resolved or false -> open/reopened) , no change will occur. A dangling
             * comment cannot be updated.
             */
            resolved?: boolean;
        }
        export interface UpdateSpaceRoleResponse {
            /**
             * Id of the space role
             */
            id?: string;
            type?: /* The role type. */ RoleType;
            /**
             * Name of the space role
             */
            name?: string;
            /**
             * Description for the space role
             */
            description?: string;
            /**
             * Id of the task to update the space permissions associated with the space role
             */
            taskId?: string;
        }
        export interface User {
            /**
             * Display name of the user.
             */
            displayName?: string;
            /**
             * Time zone of the user. Depending on the user's privacy
             * setting, this may return null.
             */
            timeZone?: string;
            /**
             * Space ID of the user's personal space. Returns null, if no personal space for the user.
             */
            personalSpaceId?: string;
            /**
             * Whether the user is an external collaborator.
             */
            isExternalCollaborator?: boolean;
            accountStatus?: /* The account status of the user. */ AccountStatus;
            /**
             * Account ID of the user.
             */
            accountId?: string;
            /**
             * The email address of the user. Depending on the user's privacy setting, this may return an empty string.
             */
            email?: string;
            accountType?: /* The account type of the user. */ AccountType;
            /**
             * Public name of the user.
             */
            publicName?: string;
            profilePicture?: /* This object represents an icon. If used as a profilePicture, this may be returned as null, depending on the user's privacy setting. */ Icon;
        }
        export interface Version {
            /**
             * Date and time when the version was created. In format "YYYY-MM-DDTHH:mm:ss.sssZ".
             */
            createdAt?: string; // date-time
            /**
             * Message associated with the current version.
             */
            message?: string;
            /**
             * The version number.
             */
            number?: number; // int32
            /**
             * Describes if this version is a minor version. Email notifications and activity stream updates are not created for minor versions.
             */
            minorEdit?: boolean;
            /**
             * The account ID of the user who created this version.
             */
            authorId?: string;
        }
        /**
         * The sort fields for versions. The default sort direction is ascending. To sort in descending order, append a `-` character before the sort field. For example, `fieldName` or `-fieldName`.
         */
        export type VersionSortOrder = "modified-date" | "-modified-date";
        export interface VersionedEntity {
            /**
             * Title of the entity.
             */
            title?: string;
            /**
             * ID of the entity.
             */
            id?: string;
            body?: /* Contains fields for each representation type requested. */ BodyBulk;
        }
        export interface WhiteboardLinks {
            /**
             * Web UI link of the content.
             */
            webui?: string;
            /**
             * Edit UI link of the content.
             */
            editui?: string;
        }
        export interface WhiteboardSingle {
            /**
             * ID of the whiteboard.
             */
            id?: string;
            /**
             * The content type of the object.
             */
            type?: string;
            status?: /* The status of the content. */ ContentStatus;
            /**
             * Title of the whiteboard.
             */
            title?: string;
            /**
             * ID of the parent content, or null if there is no parent content.
             */
            parentId?: string;
            parentType?: /* Content type of the parent, or null if there is no parent. */ ParentContentType;
            /**
             * Position of the whiteboard within the given parent page tree.
             */
            position?: number | null; // int32
            /**
             * The account ID of the user who created this whiteboard originally.
             */
            authorId?: string;
            /**
             * The account ID of the user who owns this whiteboard.
             */
            ownerId?: string;
            /**
             * Date and time when the whiteboard was created. In format "YYYY-MM-DDTHH:mm:ss.sssZ".
             */
            createdAt?: string; // date-time
            /**
             * ID of the space the whiteboard is in.
             */
            spaceId?: string;
            version?: Version;
            _links?: WhiteboardLinks;
        }
    }
}
declare namespace Paths {
    namespace CheckAccessByEmail {
        export type RequestBody = Components.RequestBodies.CheckAccessOrInviteByEmailRequest;
        namespace Responses {
            export interface $200 {
                /**
                 * List of emails that do not have access to site.
                 */
                emailsWithoutAccess?: string[];
                /**
                 * List of invalid emails provided in the request.
                 */
                invalidEmails?: string[];
            }
            export interface $404 {
            }
            export interface $503 {
            }
        }
    }
    namespace ConvertContentIdsToContentTypes {
        export type RequestBody = Components.RequestBodies.ContentIdToContentTypeRequest;
        namespace Responses {
            export type $200 = Components.Schemas.ContentIdToContentTypeResponse;
        }
    }
    namespace CreateAttachmentProperty {
        namespace Parameters {
            export type AttachmentId = string; // (att)?[0-9]+
        }
        export interface PathParameters {
            "attachment-id": Parameters.AttachmentId /* (att)?[0-9]+ */;
        }
        export type RequestBody = Components.Schemas.ContentPropertyCreateRequest;
        namespace Responses {
            export type $200 = Components.Schemas.ContentProperty;
        }
    }
    namespace CreateBlogPost {
        namespace Parameters {
            export type Private = boolean;
        }
        export interface QueryParameters {
            private?: Parameters.Private;
        }
        export type RequestBody = Components.RequestBodies.BlogPostCreateRequest;
        namespace Responses {
            export interface $200 {
                /**
                 * ID of the blog post.
                 */
                id?: string;
                status?: /* The status of the content. */ Components.Schemas.BlogPostContentStatus;
                /**
                 * Title of the blog post.
                 */
                title?: string;
                /**
                 * ID of the space the blog post is in.
                 */
                spaceId?: string;
                /**
                 * The account ID of the user who created this blog post originally.
                 */
                authorId?: string;
                /**
                 * Date and time when the blog post was created. In format "YYYY-MM-DDTHH:mm:ss.sssZ".
                 */
                createdAt?: string; // date-time
                version?: Components.Schemas.Version;
                body?: /* Contains fields for each representation type requested. */ Components.Schemas.BodySingle;
                labels?: {
                    results?: Components.Schemas.Label[];
                    meta?: Components.Schemas.OptionalFieldMeta;
                    _links?: Components.Schemas.OptionalFieldLinks;
                };
                properties?: {
                    results?: Components.Schemas.ContentProperty[];
                    meta?: Components.Schemas.OptionalFieldMeta;
                    _links?: Components.Schemas.OptionalFieldLinks;
                };
                operations?: {
                    results?: Components.Schemas.Operation[];
                    meta?: Components.Schemas.OptionalFieldMeta;
                    _links?: Components.Schemas.OptionalFieldLinks;
                };
                likes?: {
                    results?: Components.Schemas.Like[];
                    meta?: Components.Schemas.OptionalFieldMeta;
                    _links?: Components.Schemas.OptionalFieldLinks;
                };
                versions?: {
                    results?: Components.Schemas.Version[];
                    meta?: Components.Schemas.OptionalFieldMeta;
                    _links?: Components.Schemas.OptionalFieldLinks;
                };
                /**
                 * Whether the blog post has been favorited by the current user.
                 */
                isFavoritedByCurrentUser?: boolean;
                _links?: Components.Schemas.AbstractPageLinks;
            }
        }
    }
    namespace CreateBlogpostProperty {
        namespace Parameters {
            export type BlogpostId = number; // int64
        }
        export interface PathParameters {
            "blogpost-id": Parameters.BlogpostId /* int64 */;
        }
        export type RequestBody = Components.Schemas.ContentPropertyCreateRequest;
        namespace Responses {
            export type $200 = Components.Schemas.ContentProperty;
        }
    }
    namespace CreateBulkUserLookup {
        export type RequestBody = Components.RequestBodies.BulkUsersRequest;
        namespace Responses {
            /**
             * MultiEntityResult<User>
             */
            export interface $200 {
                results?: Components.Schemas.User[];
                _links?: Components.Schemas.MultiEntityLinks;
            }
            export interface $404 {
            }
        }
    }
    namespace CreateCommentProperty {
        namespace Parameters {
            export type CommentId = number; // int64
        }
        export interface PathParameters {
            "comment-id": Parameters.CommentId /* int64 */;
        }
        export type RequestBody = Components.Schemas.ContentPropertyCreateRequest;
        namespace Responses {
            export type $200 = Components.Schemas.ContentProperty;
        }
    }
    namespace CreateCustomContent {
        export type RequestBody = Components.RequestBodies.CustomContentCreateRequest;
        namespace Responses {
            export interface $201 {
                /**
                 * ID of the custom content.
                 */
                id?: string;
                /**
                 * The type of custom content.
                 */
                type?: string;
                status?: /* The status of the content. */ Components.Schemas.ContentStatus;
                /**
                 * Title of the custom content.
                 */
                title?: string;
                /**
                 * ID of the space the custom content is in.
                 *
                 * Note: This is always returned, regardless of if the custom content has a container that is a space.
                 */
                spaceId?: string;
                /**
                 * ID of the containing page.
                 *
                 * Note: This is only returned if the custom content has a container that is a page.
                 */
                pageId?: string;
                /**
                 * ID of the containing blog post.
                 *
                 * Note: This is only returned if the custom content has a container that is a blog post.
                 */
                blogPostId?: string;
                /**
                 * ID of the containing custom content.
                 *
                 * Note: This is only returned if the custom content has a container that is custom content.
                 */
                customContentId?: string;
                /**
                 * The account ID of the user who created this custom content originally.
                 */
                authorId?: string;
                /**
                 * Date and time when the custom content was created. In format "YYYY-MM-DDTHH:mm:ss.sssZ".
                 */
                createdAt?: string; // date-time
                version?: Components.Schemas.Version;
                labels?: {
                    results?: Components.Schemas.Label[];
                    meta?: Components.Schemas.OptionalFieldMeta;
                    _links?: Components.Schemas.OptionalFieldLinks;
                };
                properties?: {
                    results?: Components.Schemas.ContentProperty[];
                    meta?: Components.Schemas.OptionalFieldMeta;
                    _links?: Components.Schemas.OptionalFieldLinks;
                };
                operations?: {
                    results?: Components.Schemas.Operation[];
                    meta?: Components.Schemas.OptionalFieldMeta;
                    _links?: Components.Schemas.OptionalFieldLinks;
                };
                versions?: {
                    results?: Components.Schemas.Version[];
                    meta?: Components.Schemas.OptionalFieldMeta;
                    _links?: Components.Schemas.OptionalFieldLinks;
                };
                body?: /* Contains fields for each representation type requested. */ Components.Schemas.CustomContentBodySingle;
                _links?: Components.Schemas.CustomContentLinks;
            }
            export interface $404 {
            }
        }
    }
    namespace CreateCustomContentProperty {
        namespace Parameters {
            export type CustomContentId = number; // int64
        }
        export interface PathParameters {
            "custom-content-id": Parameters.CustomContentId /* int64 */;
        }
        export type RequestBody = Components.Schemas.ContentPropertyCreateRequest;
        namespace Responses {
            export type $200 = Components.Schemas.ContentProperty;
        }
    }
    namespace CreateDatabase {
        namespace Parameters {
            export type Private = boolean;
        }
        export interface QueryParameters {
            private?: Parameters.Private;
        }
        export type RequestBody = Components.RequestBodies.DatabaseCreateRequest;
        namespace Responses {
            export interface $200 {
                /**
                 * ID of the database.
                 */
                id?: string;
                /**
                 * The content type of the object.
                 */
                type?: string;
                status?: /* The status of the content. */ Components.Schemas.ContentStatus;
                /**
                 * Title of the database.
                 */
                title?: string;
                /**
                 * ID of the parent content, or null if there is no parent content.
                 */
                parentId?: string;
                parentType?: /* Content type of the parent, or null if there is no parent. */ Components.Schemas.ParentContentType;
                /**
                 * Position of the database within the given parent page tree.
                 */
                position?: number | null; // int32
                /**
                 * The account ID of the user who created this database originally.
                 */
                authorId?: string;
                /**
                 * The account ID of the user who owns this database.
                 */
                ownerId?: string;
                /**
                 * Date and time when the database was created. In format "YYYY-MM-DDTHH:mm:ss.sssZ".
                 */
                createdAt?: string; // date-time
                /**
                 * ID of the space the database is in.
                 */
                spaceId?: string;
                version?: Components.Schemas.Version;
                _links?: Components.Schemas.DatabaseLinks;
            }
            export interface $404 {
            }
        }
    }
    namespace CreateDatabaseProperty {
        namespace Parameters {
            export type Id = number; // int64
        }
        export interface PathParameters {
            id: Parameters.Id /* int64 */;
        }
        export type RequestBody = Components.Schemas.ContentPropertyCreateRequest;
        namespace Responses {
            export type $200 = Components.Schemas.ContentProperty;
        }
    }
    namespace CreateFolder {
        export type RequestBody = Components.RequestBodies.FolderCreateRequest;
        namespace Responses {
            export interface $200 {
                /**
                 * ID of the folder.
                 */
                id?: string;
                /**
                 * The content type of the object.
                 */
                type?: string;
                status?: /* The status of the content. */ Components.Schemas.ContentStatus;
                /**
                 * Title of the folder.
                 */
                title?: string;
                /**
                 * ID of the parent content, or null if there is no parent content.
                 */
                parentId?: string;
                parentType?: /* Content type of the parent, or null if there is no parent. */ Components.Schemas.ParentContentType;
                /**
                 * Position of the folder within the given parent page tree.
                 */
                position?: number | null; // int32
                /**
                 * The account ID of the user who created this folder.
                 */
                authorId?: string;
                /**
                 * The account ID of the user who owns this folder.
                 */
                ownerId?: string;
                /**
                 * Date and time when the folder was created. In format "YYYY-MM-DDTHH:mm:ss.sssZ".
                 */
                createdAt?: string; // date-time
                /**
                 * ID of the space the folder is in.
                 */
                spaceId?: string;
                version?: Components.Schemas.Version;
                _links?: Components.Schemas.FolderLinks;
            }
            export interface $404 {
            }
        }
    }
    namespace CreateFolderProperty {
        namespace Parameters {
            export type Id = number; // int64
        }
        export interface PathParameters {
            id: Parameters.Id /* int64 */;
        }
        export type RequestBody = Components.Schemas.ContentPropertyCreateRequest;
        namespace Responses {
            export type $200 = Components.Schemas.ContentProperty;
        }
    }
    namespace CreateFooterComment {
        export type RequestBody = Components.Schemas.CreateFooterCommentModel;
        namespace Responses {
            export interface $201 {
                /**
                 * ID of the comment.
                 */
                id?: string;
                status?: /* The status of the content. */ Components.Schemas.ContentStatus;
                /**
                 * Title of the comment.
                 */
                title?: string;
                /**
                 * ID of the blog post containing the comment if the comment is on a blog post.
                 */
                blogPostId?: string;
                /**
                 * ID of the page containing the comment if the comment is on a page.
                 */
                pageId?: string;
                /**
                 * ID of the attachment containing the comment if the comment is on an attachment.
                 */
                attachmentId?: string;
                /**
                 * ID of the custom content containing the comment if the comment is on a custom content.
                 */
                customContentId?: string;
                /**
                 * ID of the parent comment if the comment is a reply.
                 */
                parentCommentId?: string;
                version?: Components.Schemas.Version;
                properties?: {
                    results?: Components.Schemas.ContentProperty[];
                    meta?: Components.Schemas.OptionalFieldMeta;
                    _links?: Components.Schemas.OptionalFieldLinks;
                };
                operations?: {
                    results?: Components.Schemas.Operation[];
                    meta?: Components.Schemas.OptionalFieldMeta;
                    _links?: Components.Schemas.OptionalFieldLinks;
                };
                likes?: {
                    results?: Components.Schemas.Like[];
                    meta?: Components.Schemas.OptionalFieldMeta;
                    _links?: Components.Schemas.OptionalFieldLinks;
                };
                versions?: {
                    results?: Components.Schemas.Version[];
                    meta?: Components.Schemas.OptionalFieldMeta;
                    _links?: Components.Schemas.OptionalFieldLinks;
                };
                body?: /* Contains fields for each representation type requested. */ Components.Schemas.BodySingle;
                _links?: Components.Schemas.CommentLinks;
            }
        }
    }
    namespace CreateInlineComment {
        export type RequestBody = Components.Schemas.CreateInlineCommentModel;
        namespace Responses {
            export interface $201 {
                /**
                 * ID of the comment.
                 */
                id?: string;
                status?: /* The status of the content. */ Components.Schemas.ContentStatus;
                /**
                 * Title of the comment.
                 */
                title?: string;
                /**
                 * ID of the blog post containing the comment if the comment is on a blog post.
                 */
                blogPostId?: string;
                /**
                 * ID of the page containing the comment if the comment is on a page.
                 */
                pageId?: string;
                /**
                 * ID of the parent comment if the comment is a reply.
                 */
                parentCommentId?: string;
                version?: Components.Schemas.Version;
                body?: /* Contains fields for each representation type requested. */ Components.Schemas.BodySingle;
                /**
                 * Atlassian Account ID of last person who modified the resolve state of the comment. Null until comment is resolved or reopened.
                 */
                resolutionLastModifierId?: string;
                /**
                 * Timestamp of the last modification to the comment's resolution status. Null until comment is resolved or reopened.
                 */
                resolutionLastModifiedAt?: string; // date-time
                resolutionStatus?: /* Inline comment resolution status */ Components.Schemas.InlineCommentResolutionStatus;
                properties?: {
                    results?: Components.Schemas.ContentProperty[];
                    meta?: Components.Schemas.OptionalFieldMeta;
                    _links?: Components.Schemas.OptionalFieldLinks;
                    /**
                     * Property value used to reference the highlighted element in DOM.
                     */
                    inlineMarkerRef?: string;
                    /**
                     * Text that is highlighted.
                     */
                    inlineOriginalSelection?: string;
                };
                operations?: {
                    results?: Components.Schemas.Operation[];
                    meta?: Components.Schemas.OptionalFieldMeta;
                    _links?: Components.Schemas.OptionalFieldLinks;
                };
                likes?: {
                    results?: Components.Schemas.Like[];
                    meta?: Components.Schemas.OptionalFieldMeta;
                    _links?: Components.Schemas.OptionalFieldLinks;
                };
                versions?: {
                    results?: Components.Schemas.Version[];
                    meta?: Components.Schemas.OptionalFieldMeta;
                    _links?: Components.Schemas.OptionalFieldLinks;
                };
                _links?: Components.Schemas.CommentLinks;
            }
        }
    }
    namespace CreatePage {
        namespace Parameters {
            export type Embedded = boolean;
            export type Private = boolean;
            export type RootLevel = boolean;
        }
        export interface QueryParameters {
            embedded?: Parameters.Embedded;
            private?: Parameters.Private;
            "root-level"?: Parameters.RootLevel;
        }
        export type RequestBody = Components.RequestBodies.PageCreateRequest;
        namespace Responses {
            export interface $200 {
                /**
                 * ID of the page.
                 */
                id?: string;
                status?: /* The status of the content. */ Components.Schemas.ContentStatus;
                /**
                 * Title of the page.
                 */
                title?: string;
                /**
                 * ID of the space the page is in.
                 */
                spaceId?: string;
                /**
                 * ID of the parent page, or null if there is no parent page.
                 */
                parentId?: string;
                parentType?: /* Content type of the parent, or null if there is no parent. */ Components.Schemas.ParentContentType;
                /**
                 * Position of child page within the given parent page tree.
                 */
                position?: number | null; // int32
                /**
                 * The account ID of the user who created this page originally.
                 */
                authorId?: string;
                /**
                 * The account ID of the user who owns this page.
                 */
                ownerId?: string | null;
                /**
                 * The account ID of the user who owned this page previously, or null if there is no previous owner.
                 */
                lastOwnerId?: string | null;
                /**
                 * Date and time when the page was created. In format "YYYY-MM-DDTHH:mm:ss.sssZ".
                 */
                createdAt?: string; // date-time
                version?: Components.Schemas.Version;
                body?: /* Contains fields for each representation type requested. */ Components.Schemas.BodySingle;
                labels?: {
                    results?: Components.Schemas.Label[];
                    meta?: Components.Schemas.OptionalFieldMeta;
                    _links?: Components.Schemas.OptionalFieldLinks;
                };
                properties?: {
                    results?: Components.Schemas.ContentProperty[];
                    meta?: Components.Schemas.OptionalFieldMeta;
                    _links?: Components.Schemas.OptionalFieldLinks;
                };
                operations?: {
                    results?: Components.Schemas.Operation[];
                    meta?: Components.Schemas.OptionalFieldMeta;
                    _links?: Components.Schemas.OptionalFieldLinks;
                };
                likes?: {
                    results?: Components.Schemas.Like[];
                    meta?: Components.Schemas.OptionalFieldMeta;
                    _links?: Components.Schemas.OptionalFieldLinks;
                };
                versions?: {
                    results?: Components.Schemas.Version[];
                    meta?: Components.Schemas.OptionalFieldMeta;
                    _links?: Components.Schemas.OptionalFieldLinks;
                };
                /**
                 * Whether the page has been favorited by the current user.
                 */
                isFavoritedByCurrentUser?: boolean;
                _links?: Components.Schemas.AbstractPageLinks;
            }
            export interface $404 {
            }
        }
    }
    namespace CreatePageProperty {
        namespace Parameters {
            export type PageId = number; // int64
        }
        export interface PathParameters {
            "page-id": Parameters.PageId /* int64 */;
        }
        export type RequestBody = Components.Schemas.ContentPropertyCreateRequest;
        namespace Responses {
            export type $200 = Components.Schemas.ContentProperty;
        }
    }
    namespace CreateSmartLink {
        export type RequestBody = Components.RequestBodies.SmartLinkCreateRequest;
        namespace Responses {
            export interface $200 {
                /**
                 * ID of the Smart Link in the content tree.
                 */
                id?: string;
                /**
                 * The content type of the object.
                 */
                type?: string;
                status?: /* The status of the content. */ Components.Schemas.ContentStatus;
                /**
                 * Title of the Smart Link in the content tree.
                 */
                title?: string;
                /**
                 * ID of the parent content, or null if there is no parent content.
                 */
                parentId?: string;
                parentType?: /* Content type of the parent, or null if there is no parent. */ Components.Schemas.ParentContentType;
                /**
                 * Position of the Smart Link within the given parent page tree.
                 */
                position?: number | null; // int32
                /**
                 * The account ID of the user who created this Smart Link in the content tree originally.
                 */
                authorId?: string;
                /**
                 * The account ID of the user who owns this Smart Link in the content tree.
                 */
                ownerId?: string;
                /**
                 * Date and time when the Smart Link in the content tree was created. In format "YYYY-MM-DDTHH:mm:ss.sssZ".
                 */
                createdAt?: string; // date-time
                /**
                 * The embedded URL of the Smart Link. If the Smart Link does not have an embedded URL, this property will not be included in the response.
                 */
                embedUrl?: string;
                /**
                 * ID of the space the Smart Link is in.
                 */
                spaceId?: string;
                version?: Components.Schemas.Version;
                _links?: Components.Schemas.SmartLinkLinks;
            }
            export interface $404 {
            }
        }
    }
    namespace CreateSmartLinkProperty {
        namespace Parameters {
            export type Id = number; // int64
        }
        export interface PathParameters {
            id: Parameters.Id /* int64 */;
        }
        export type RequestBody = Components.Schemas.ContentPropertyCreateRequest;
        namespace Responses {
            export type $200 = Components.Schemas.ContentProperty;
        }
    }
    namespace CreateSpace {
        export type RequestBody = Components.RequestBodies.SpaceCreateRequest;
        namespace Responses {
            export interface $201 {
                /**
                 * ID of the space.
                 */
                id?: string;
                /**
                 * Key of the space.
                 */
                key?: string;
                /**
                 * Name of the space.
                 */
                name?: string;
                type?: /* The type of space. */ Components.Schemas.SpaceType;
                status?: /* The status of the space. */ Components.Schemas.SpaceStatus;
                /**
                 * The account ID of the user who created this space originally.
                 */
                authorId?: string;
                /**
                 * Currently active alias for a Confluence space.
                 */
                currentActiveAlias?: string;
                /**
                 * Date and time when the space was created. In format "YYYY-MM-DDTHH:mm:ss.sssZ".
                 */
                createdAt?: string; // date-time
                /**
                 * ID of the space's homepage.
                 */
                homepageId?: string;
                description?: /* Contains fields for each representation type requested. */ Components.Schemas.SpaceDescription;
                icon?: /* The icon of the space */ Components.Schemas.SpaceIcon;
                _links?: Components.Schemas.SpaceLinks;
            }
        }
    }
    namespace CreateSpaceProperty {
        namespace Parameters {
            export type SpaceId = number; // int64
        }
        export interface PathParameters {
            "space-id": Parameters.SpaceId /* int64 */;
        }
        export type RequestBody = Components.Schemas.SpacePropertyCreateRequest;
        namespace Responses {
            export type $201 = Components.Schemas.SpaceProperty;
        }
    }
    namespace CreateSpaceRole {
        export interface RequestBody {
            /**
             * Name of the space role
             */
            name: string;
            /**
             * Description for the space role
             */
            description: string;
            /**
             * The ids of the space permissions associated with the space role. Sample value "read/space"; retrieve ids from responses returned by [GET /space-permissions](https://developer.atlassian.com/cloud/confluence/rest/v2/api-group-space-permissions/#api-space-permissions-get) endpoint
             */
            spacePermissions: string[];
        }
        namespace Responses {
            export type $201 = Components.Schemas.SpaceRole;
        }
    }
    namespace CreateWhiteboard {
        namespace Parameters {
            export type Private = boolean;
        }
        export interface QueryParameters {
            private?: Parameters.Private;
        }
        export type RequestBody = Components.RequestBodies.WhiteboardCreateRequest;
        namespace Responses {
            export interface $200 {
                /**
                 * ID of the whiteboard.
                 */
                id?: string;
                /**
                 * The content type of the object.
                 */
                type?: string;
                status?: /* The status of the content. */ Components.Schemas.ContentStatus;
                /**
                 * Title of the whiteboard.
                 */
                title?: string;
                /**
                 * ID of the parent content, or null if there is no parent content.
                 */
                parentId?: string;
                parentType?: /* Content type of the parent, or null if there is no parent. */ Components.Schemas.ParentContentType;
                /**
                 * Position of the whiteboard within the given parent page tree.
                 */
                position?: number | null; // int32
                /**
                 * The account ID of the user who created this whiteboard originally.
                 */
                authorId?: string;
                /**
                 * The account ID of the user who owns this whiteboard.
                 */
                ownerId?: string;
                /**
                 * Date and time when the whiteboard was created. In format "YYYY-MM-DDTHH:mm:ss.sssZ".
                 */
                createdAt?: string; // date-time
                /**
                 * ID of the space the whiteboard is in.
                 */
                spaceId?: string;
                version?: Components.Schemas.Version;
                _links?: Components.Schemas.WhiteboardLinks;
            }
            export interface $404 {
            }
        }
    }
    namespace CreateWhiteboardProperty {
        namespace Parameters {
            export type Id = number; // int64
        }
        export interface PathParameters {
            id: Parameters.Id /* int64 */;
        }
        export type RequestBody = Components.Schemas.ContentPropertyCreateRequest;
        namespace Responses {
            export type $200 = Components.Schemas.ContentProperty;
        }
    }
    namespace DeleteAttachment {
        namespace Parameters {
            export type Id = number; // int64
            export type Purge = boolean;
        }
        export interface PathParameters {
            id: Parameters.Id /* int64 */;
        }
        export interface QueryParameters {
            purge?: Parameters.Purge;
        }
        namespace Responses {
            export interface $404 {
            }
        }
    }
    namespace DeleteAttachmentPropertyById {
        namespace Parameters {
            export type AttachmentId = string; // (att)?[0-9]+
            export type PropertyId = number; // int64
        }
        export interface PathParameters {
            "attachment-id": Parameters.AttachmentId /* (att)?[0-9]+ */;
            "property-id": Parameters.PropertyId /* int64 */;
        }
        namespace Responses {
            export interface $204 {
            }
        }
    }
    namespace DeleteBlogPost {
        namespace Parameters {
            export type Draft = boolean;
            export type Id = number; // int64
            export type Purge = boolean;
        }
        export interface PathParameters {
            id: Parameters.Id /* int64 */;
        }
        export interface QueryParameters {
            purge?: Parameters.Purge;
            draft?: Parameters.Draft;
        }
        namespace Responses {
            export interface $404 {
            }
        }
    }
    namespace DeleteBlogpostPropertyById {
        namespace Parameters {
            export type BlogpostId = number; // int64
            export type PropertyId = number; // int64
        }
        export interface PathParameters {
            "blogpost-id": Parameters.BlogpostId /* int64 */;
            "property-id": Parameters.PropertyId /* int64 */;
        }
        namespace Responses {
            export interface $204 {
            }
        }
    }
    namespace DeleteCommentPropertyById {
        namespace Parameters {
            export type CommentId = number; // int64
            export type PropertyId = number; // int64
        }
        export interface PathParameters {
            "comment-id": Parameters.CommentId /* int64 */;
            "property-id": Parameters.PropertyId /* int64 */;
        }
        namespace Responses {
            export interface $204 {
            }
        }
    }
    namespace DeleteCustomContent {
        namespace Parameters {
            export type Id = number; // int64
            export type Purge = boolean;
        }
        export interface PathParameters {
            id: Parameters.Id /* int64 */;
        }
        export interface QueryParameters {
            purge?: Parameters.Purge;
        }
        namespace Responses {
            export interface $404 {
            }
        }
    }
    namespace DeleteCustomContentPropertyById {
        namespace Parameters {
            export type CustomContentId = number; // int64
            export type PropertyId = number; // int64
        }
        export interface PathParameters {
            "custom-content-id": Parameters.CustomContentId /* int64 */;
            "property-id": Parameters.PropertyId /* int64 */;
        }
        namespace Responses {
            export interface $204 {
            }
        }
    }
    namespace DeleteDatabase {
        namespace Parameters {
            export type Id = number; // int64
        }
        export interface PathParameters {
            id: Parameters.Id /* int64 */;
        }
        namespace Responses {
            export interface $404 {
            }
        }
    }
    namespace DeleteDatabasePropertyById {
        namespace Parameters {
            export type DatabaseId = number; // int64
            export type PropertyId = number; // int64
        }
        export interface PathParameters {
            "database-id": Parameters.DatabaseId /* int64 */;
            "property-id": Parameters.PropertyId /* int64 */;
        }
        namespace Responses {
            export interface $204 {
            }
        }
    }
    namespace DeleteFolder {
        namespace Parameters {
            export type Id = number; // int64
        }
        export interface PathParameters {
            id: Parameters.Id /* int64 */;
        }
        namespace Responses {
            export interface $404 {
            }
        }
    }
    namespace DeleteFolderPropertyById {
        namespace Parameters {
            export type FolderId = number; // int64
            export type PropertyId = number; // int64
        }
        export interface PathParameters {
            "folder-id": Parameters.FolderId /* int64 */;
            "property-id": Parameters.PropertyId /* int64 */;
        }
        namespace Responses {
            export interface $204 {
            }
        }
    }
    namespace DeleteFooterComment {
        namespace Parameters {
            export type CommentId = number; // int64
        }
        export interface PathParameters {
            "comment-id": Parameters.CommentId /* int64 */;
        }
        namespace Responses {
            export interface $204 {
            }
            export interface $404 {
            }
        }
    }
    namespace DeleteForgeAppProperty {
        namespace Parameters {
            export type PropertyKey = string;
        }
        export interface PathParameters {
            propertyKey: Parameters.PropertyKey;
        }
        namespace Responses {
            export interface $204 {
            }
            export interface $400 {
            }
            export interface $401 {
            }
            export interface $403 {
            }
        }
    }
    namespace DeleteInlineComment {
        namespace Parameters {
            export type CommentId = number; // int64
        }
        export interface PathParameters {
            "comment-id": Parameters.CommentId /* int64 */;
        }
        namespace Responses {
            export interface $204 {
            }
        }
    }
    namespace DeletePage {
        namespace Parameters {
            export type Draft = boolean;
            export type Id = number; // int64
            export type Purge = boolean;
        }
        export interface PathParameters {
            id: Parameters.Id /* int64 */;
        }
        export interface QueryParameters {
            purge?: Parameters.Purge;
            draft?: Parameters.Draft;
        }
        namespace Responses {
            export interface $404 {
            }
        }
    }
    namespace DeletePagePropertyById {
        namespace Parameters {
            export type PageId = number; // int64
            export type PropertyId = number; // int64
        }
        export interface PathParameters {
            "page-id": Parameters.PageId /* int64 */;
            "property-id": Parameters.PropertyId /* int64 */;
        }
        namespace Responses {
            export interface $204 {
            }
        }
    }
    namespace DeleteSmartLink {
        namespace Parameters {
            export type Id = number; // int64
        }
        export interface PathParameters {
            id: Parameters.Id /* int64 */;
        }
        namespace Responses {
            export interface $404 {
            }
        }
    }
    namespace DeleteSmartLinkPropertyById {
        namespace Parameters {
            export type EmbedId = number; // int64
            export type PropertyId = number; // int64
        }
        export interface PathParameters {
            "embed-id": Parameters.EmbedId /* int64 */;
            "property-id": Parameters.PropertyId /* int64 */;
        }
        namespace Responses {
            export interface $204 {
            }
        }
    }
    namespace DeleteSpaceDefaultClassificationLevel {
        namespace Parameters {
            export type Id = number; // int64
        }
        export interface PathParameters {
            id: Parameters.Id /* int64 */;
        }
    }
    namespace DeleteSpacePropertyById {
        namespace Parameters {
            export type PropertyId = number; // int64
            export type SpaceId = number; // int64
        }
        export interface PathParameters {
            "space-id": Parameters.SpaceId /* int64 */;
            "property-id": Parameters.PropertyId /* int64 */;
        }
        namespace Responses {
            export interface $204 {
            }
        }
    }
    namespace DeleteSpaceRole {
        namespace Parameters {
            export type Id = string;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        namespace Responses {
            export type $202 = Components.Schemas.DeleteSpaceRoleResponse;
        }
    }
    namespace DeleteWhiteboard {
        namespace Parameters {
            export type Id = number; // int64
        }
        export interface PathParameters {
            id: Parameters.Id /* int64 */;
        }
        namespace Responses {
            export interface $404 {
            }
        }
    }
    namespace DeleteWhiteboardPropertyById {
        namespace Parameters {
            export type PropertyId = number; // int64
            export type WhiteboardId = number; // int64
        }
        export interface PathParameters {
            "whiteboard-id": Parameters.WhiteboardId /* int64 */;
            "property-id": Parameters.PropertyId /* int64 */;
        }
        namespace Responses {
            export interface $204 {
            }
        }
    }
    namespace EnableAdminKey {
        export type RequestBody = Components.RequestBodies.AdminKeyRequest;
        namespace Responses {
            export type $200 = Components.Schemas.AdminKeyResponse;
        }
    }
    namespace GetAdminKey {
        namespace Responses {
            export type $200 = Components.Schemas.AdminKeyResponse;
        }
    }
    namespace GetAttachmentById {
        namespace Parameters {
            export type Id = string; // (att)?[0-9]+
            export type IncludeCollaborators = boolean;
            export type IncludeLabels = boolean;
            export type IncludeOperations = boolean;
            export type IncludeProperties = boolean;
            export type IncludeVersion = boolean;
            export type IncludeVersions = boolean;
            export type Version = number;
        }
        export interface PathParameters {
            id: Parameters.Id /* (att)?[0-9]+ */;
        }
        export interface QueryParameters {
            version?: Parameters.Version;
            "include-labels"?: Parameters.IncludeLabels;
            "include-properties"?: Parameters.IncludeProperties;
            "include-operations"?: Parameters.IncludeOperations;
            "include-versions"?: Parameters.IncludeVersions;
            "include-version"?: Parameters.IncludeVersion;
            "include-collaborators"?: Parameters.IncludeCollaborators;
        }
        namespace Responses {
            export interface $200 {
                /**
                 * ID of the attachment.
                 */
                id?: string;
                status?: /* The status of the content. */ Components.Schemas.ContentStatus;
                /**
                 * Title of the comment.
                 */
                title?: string;
                /**
                 * Date and time when the attachment was created. In format "YYYY-MM-DDTHH:mm:ss.sssZ".
                 */
                createdAt?: string; // date-time
                /**
                 * ID of the containing page.
                 *
                 * Note: This is only returned if the attachment has a container that is a page.
                 */
                pageId?: string;
                /**
                 * ID of the containing blog post.
                 *
                 * Note: This is only returned if the attachment has a container that is a blog post.
                 */
                blogPostId?: string;
                /**
                 * ID of the containing custom content.
                 *
                 * Note: This is only returned if the attachment has a container that is custom content.
                 */
                customContentId?: string;
                /**
                 * Media Type for the attachment.
                 */
                mediaType?: string;
                /**
                 * Media Type description for the attachment.
                 */
                mediaTypeDescription?: string;
                /**
                 * Comment for the attachment.
                 */
                comment?: string;
                /**
                 * File ID of the attachment. This is the ID referenced in `atlas_doc_format` bodies and is distinct from the attachment ID.
                 */
                fileId?: string;
                /**
                 * File size of the attachment.
                 */
                fileSize?: number; // int64
                /**
                 * WebUI link of the attachment.
                 */
                webuiLink?: string;
                /**
                 * Download link of the attachment.
                 */
                downloadLink?: string;
                version?: Components.Schemas.Version;
                labels?: {
                    results?: Components.Schemas.Label[];
                    meta?: Components.Schemas.OptionalFieldMeta;
                    _links?: Components.Schemas.OptionalFieldLinks;
                };
                properties?: {
                    results?: Components.Schemas.ContentProperty[];
                    meta?: Components.Schemas.OptionalFieldMeta;
                    _links?: Components.Schemas.OptionalFieldLinks;
                };
                operations?: {
                    results?: Components.Schemas.Operation[];
                    meta?: Components.Schemas.OptionalFieldMeta;
                    _links?: Components.Schemas.OptionalFieldLinks;
                };
                versions?: {
                    results?: Components.Schemas.Version[];
                    meta?: Components.Schemas.OptionalFieldMeta;
                    _links?: Components.Schemas.OptionalFieldLinks;
                };
                _links?: Components.Schemas.AttachmentLinks;
            }
        }
    }
    namespace GetAttachmentComments {
        namespace Parameters {
            export type BodyFormat = /* The primary formats a body can be represented as. A subset of BodyRepresentation. These formats are the only allowed formats in certain use cases. */ Components.Schemas.PrimaryBodyRepresentation;
            export type Cursor = string;
            export type Id = string; // (att)?[0-9]+
            export type Limit = number; // int32
            export type Sort = /* The sort fields for comments. The default sort direction is ascending. To sort in descending order, append a `-` character before the sort field. For example, `fieldName` or `-fieldName`. */ Components.Schemas.CommentSortOrder;
            export type Version = number; // int64
        }
        export interface PathParameters {
            id: Parameters.Id /* (att)?[0-9]+ */;
        }
        export interface QueryParameters {
            "body-format"?: Parameters.BodyFormat;
            cursor?: Parameters.Cursor;
            limit?: Parameters.Limit /* int32 */;
            sort?: Parameters.Sort;
            version?: Parameters.Version /* int64 */;
        }
        namespace Responses {
            /**
             * MultiEntityResult<AttachmentCommentModel>
             */
            export interface $200 {
                results?: Components.Schemas.AttachmentCommentModel[];
                _links?: Components.Schemas.MultiEntityLinks;
            }
        }
    }
    namespace GetAttachmentContentProperties {
        namespace Parameters {
            export type AttachmentId = string; // (att)?[0-9]+
            export type Cursor = string;
            export type Key = string;
            export type Limit = number; // int32
            export type Sort = /* The sort fields for content properties. The default sort direction is ascending. To sort in descending order, append a `-` character before the sort field. For example, `fieldName` or `-fieldName`. */ Components.Schemas.ContentPropertySortOrder;
        }
        export interface PathParameters {
            "attachment-id": Parameters.AttachmentId /* (att)?[0-9]+ */;
        }
        export interface QueryParameters {
            key?: Parameters.Key;
            sort?: Parameters.Sort;
            cursor?: Parameters.Cursor;
            limit?: Parameters.Limit /* int32 */;
        }
        namespace Responses {
            /**
             * MultiEntityResult<ContentProperty>
             */
            export interface $200 {
                results?: Components.Schemas.ContentProperty[];
                _links?: Components.Schemas.MultiEntityLinks;
            }
        }
    }
    namespace GetAttachmentContentPropertiesById {
        namespace Parameters {
            export type AttachmentId = string; // (att)?0-9+
            export type PropertyId = number; // int64
        }
        export interface PathParameters {
            "attachment-id": Parameters.AttachmentId /* (att)?0-9+ */;
            "property-id": Parameters.PropertyId /* int64 */;
        }
        namespace Responses {
            export type $200 = Components.Schemas.ContentProperty;
        }
    }
    namespace GetAttachmentLabels {
        namespace Parameters {
            export type Cursor = string;
            export type Id = number; // int64
            export type Limit = number; // int32
            export type Prefix = "my" | "team" | "global" | "system";
            export type Sort = string;
        }
        export interface PathParameters {
            id: Parameters.Id /* int64 */;
        }
        export interface QueryParameters {
            prefix?: Parameters.Prefix;
            sort?: Parameters.Sort;
            cursor?: Parameters.Cursor;
            limit?: Parameters.Limit /* int32 */;
        }
        namespace Responses {
            /**
             * MultiEntityResult<Label>
             */
            export interface $200 {
                results?: Components.Schemas.Label[];
                _links?: Components.Schemas.MultiEntityLinks;
            }
        }
    }
    namespace GetAttachmentOperations {
        namespace Parameters {
            export type Id = string; // (att)?[0-9]+
        }
        export interface PathParameters {
            id: Parameters.Id /* (att)?[0-9]+ */;
        }
        namespace Responses {
            export type $200 = /* The list of operations permitted on entity. */ Components.Schemas.PermittedOperationsResponse;
        }
    }
    namespace GetAttachmentVersionDetails {
        namespace Parameters {
            export type AttachmentId = string; // (att)?0-9+
            export type VersionNumber = number; // int64
        }
        export interface PathParameters {
            "attachment-id": Parameters.AttachmentId /* (att)?0-9+ */;
            "version-number": Parameters.VersionNumber /* int64 */;
        }
        namespace Responses {
            export type $200 = Components.Schemas.DetailedVersion;
        }
    }
    namespace GetAttachmentVersions {
        namespace Parameters {
            export type Cursor = string;
            export type Id = string; // (att)?[0-9]+
            export type Limit = number; // int32
            export type Sort = /* The sort fields for versions. The default sort direction is ascending. To sort in descending order, append a `-` character before the sort field. For example, `fieldName` or `-fieldName`. */ Components.Schemas.VersionSortOrder;
        }
        export interface PathParameters {
            id: Parameters.Id /* (att)?[0-9]+ */;
        }
        export interface QueryParameters {
            cursor?: Parameters.Cursor;
            limit?: Parameters.Limit /* int32 */;
            sort?: Parameters.Sort;
        }
        namespace Responses {
            /**
             * MultiEntityResult<Version>
             */
            export interface $200 {
                results?: Components.Schemas.AttachmentVersion[];
                _links?: Components.Schemas.MultiEntityLinks;
            }
        }
    }
    namespace GetAttachments {
        namespace Parameters {
            export type Cursor = string;
            export type Filename = string;
            export type Limit = number; // int32
            export type MediaType = string;
            export type Sort = /* The sort fields for attachments. The default sort direction is ascending. To sort in descending order, append a `-` character before the sort field. For example, `fieldName` or `-fieldName`. */ Components.Schemas.AttachmentSortOrder;
            export type Status = ("current" | "archived" | "trashed")[];
        }
        export interface QueryParameters {
            sort?: Parameters.Sort;
            cursor?: Parameters.Cursor;
            status?: Parameters.Status;
            mediaType?: Parameters.MediaType;
            filename?: Parameters.Filename;
            limit?: Parameters.Limit /* int32 */;
        }
        namespace Responses {
            /**
             * MultiEntityResult<Attachment>
             */
            export interface $200 {
                results?: Components.Schemas.AttachmentBulk[];
                _links?: Components.Schemas.MultiEntityLinks;
            }
        }
    }
    namespace GetAvailableSpacePermissions {
        namespace Parameters {
            export type Cursor = string;
            export type Limit = number; // int32
        }
        export interface QueryParameters {
            cursor?: Parameters.Cursor;
            limit?: Parameters.Limit /* int32 */;
        }
        namespace Responses {
            /**
             * MultiEntityResult<SpacePermission>
             */
            export interface $200 {
                results?: Components.Schemas.SpacePermission[];
                _links?: Components.Schemas.MultiEntityLinks;
            }
        }
    }
    namespace GetAvailableSpaceRoles {
        namespace Parameters {
            export type Cursor = string;
            export type Limit = number; // int32
            export type PrincipalId = string;
            export type PrincipalType = /* The principal type. */ Components.Schemas.PrincipalType;
            export type RoleType = string;
            export type SpaceId = string;
        }
        export interface QueryParameters {
            "space-id"?: Parameters.SpaceId;
            "role-type"?: Parameters.RoleType;
            "principal-id"?: Parameters.PrincipalId;
            "principal-type"?: Parameters.PrincipalType;
            cursor?: Parameters.Cursor;
            limit?: Parameters.Limit /* int32 */;
        }
        namespace Responses {
            /**
             * MultiEntityResult<SpaceRole>
             */
            export interface $200 {
                results?: Components.Schemas.SpaceRole[];
                _links?: Components.Schemas.MultiEntityLinks;
            }
        }
    }
    namespace GetBlogPostById {
        namespace Parameters {
            export type BodyFormat = /* The primary formats a body can be represented as. A subset of BodyRepresentation. These formats are the only allowed formats in certain use cases. */ Components.Schemas.PrimaryBodyRepresentationSingle;
            export type GetDraft = boolean;
            export type Id = number; // int64
            export type IncludeCollaborators = boolean;
            export type IncludeFavoritedByCurrentUserStatus = boolean;
            export type IncludeLabels = boolean;
            export type IncludeLikes = boolean;
            export type IncludeOperations = boolean;
            export type IncludeProperties = boolean;
            export type IncludeVersion = boolean;
            export type IncludeVersions = boolean;
            export type IncludeWebresources = boolean;
            export type Status = ("current" | "trashed" | "deleted" | "historical" | "draft")[];
            export type Version = number;
        }
        export interface PathParameters {
            id: Parameters.Id /* int64 */;
        }
        export interface QueryParameters {
            "body-format"?: Parameters.BodyFormat;
            "get-draft"?: Parameters.GetDraft;
            status?: Parameters.Status;
            version?: Parameters.Version;
            "include-labels"?: Parameters.IncludeLabels;
            "include-properties"?: Parameters.IncludeProperties;
            "include-operations"?: Parameters.IncludeOperations;
            "include-likes"?: Parameters.IncludeLikes;
            "include-versions"?: Parameters.IncludeVersions;
            "include-version"?: Parameters.IncludeVersion;
            "include-favorited-by-current-user-status"?: Parameters.IncludeFavoritedByCurrentUserStatus;
            "include-webresources"?: Parameters.IncludeWebresources;
            "include-collaborators"?: Parameters.IncludeCollaborators;
        }
        namespace Responses {
            export interface $200 {
                /**
                 * ID of the blog post.
                 */
                id?: string;
                status?: /* The status of the content. */ Components.Schemas.BlogPostContentStatus;
                /**
                 * Title of the blog post.
                 */
                title?: string;
                /**
                 * ID of the space the blog post is in.
                 */
                spaceId?: string;
                /**
                 * The account ID of the user who created this blog post originally.
                 */
                authorId?: string;
                /**
                 * Date and time when the blog post was created. In format "YYYY-MM-DDTHH:mm:ss.sssZ".
                 */
                createdAt?: string; // date-time
                version?: Components.Schemas.Version;
                body?: /* Contains fields for each representation type requested. */ Components.Schemas.BodySingle;
                labels?: {
                    results?: Components.Schemas.Label[];
                    meta?: Components.Schemas.OptionalFieldMeta;
                    _links?: Components.Schemas.OptionalFieldLinks;
                };
                properties?: {
                    results?: Components.Schemas.ContentProperty[];
                    meta?: Components.Schemas.OptionalFieldMeta;
                    _links?: Components.Schemas.OptionalFieldLinks;
                };
                operations?: {
                    results?: Components.Schemas.Operation[];
                    meta?: Components.Schemas.OptionalFieldMeta;
                    _links?: Components.Schemas.OptionalFieldLinks;
                };
                likes?: {
                    results?: Components.Schemas.Like[];
                    meta?: Components.Schemas.OptionalFieldMeta;
                    _links?: Components.Schemas.OptionalFieldLinks;
                };
                versions?: {
                    results?: Components.Schemas.Version[];
                    meta?: Components.Schemas.OptionalFieldMeta;
                    _links?: Components.Schemas.OptionalFieldLinks;
                };
                /**
                 * Whether the blog post has been favorited by the current user.
                 */
                isFavoritedByCurrentUser?: boolean;
                _links?: Components.Schemas.AbstractPageLinks;
            }
        }
    }
    namespace GetBlogPostClassificationLevel {
        namespace Parameters {
            export type Id = number; // int64
            export type Status = "current" | "draft" | "archived";
        }
        export interface PathParameters {
            id: Parameters.Id /* int64 */;
        }
        export interface QueryParameters {
            status?: Parameters.Status;
        }
        namespace Responses {
            export type $200 = /**
             * ClassificationLevel
             * A unit of [data classification](https://support.atlassian.com/security-and-access-policies/docs/what-is-data-classification/) defined by an organiation.
             * A classification level may be associated with specific storage and handling requirements or expectations.
             */
            Components.Schemas.ClassificationLevel;
        }
    }
    namespace GetBlogPostFooterComments {
        namespace Parameters {
            export type BodyFormat = /* The primary formats a body can be represented as. A subset of BodyRepresentation. These formats are the only allowed formats in certain use cases. */ Components.Schemas.PrimaryBodyRepresentation;
            export type Cursor = string;
            export type Id = number; // int64
            export type Limit = number; // int32
            export type Sort = /* The sort fields for comments. The default sort direction is ascending. To sort in descending order, append a `-` character before the sort field. For example, `fieldName` or `-fieldName`. */ Components.Schemas.CommentSortOrder;
            export type Status = ("current" | "deleted" | "trashed" | "historical" | "draft")[];
        }
        export interface PathParameters {
            id: Parameters.Id /* int64 */;
        }
        export interface QueryParameters {
            "body-format"?: Parameters.BodyFormat;
            status?: Parameters.Status;
            sort?: Parameters.Sort;
            cursor?: Parameters.Cursor;
            limit?: Parameters.Limit /* int32 */;
        }
        namespace Responses {
            /**
             * MultiEntityResult<BlogPostCommentModel>
             */
            export interface $200 {
                results?: Components.Schemas.BlogPostCommentModel[];
                _links?: Components.Schemas.MultiEntityLinks;
            }
        }
    }
    namespace GetBlogPostInlineComments {
        namespace Parameters {
            export type BodyFormat = /* The primary formats a body can be represented as. A subset of BodyRepresentation. These formats are the only allowed formats in certain use cases. */ Components.Schemas.PrimaryBodyRepresentation;
            export type Cursor = string;
            export type Id = number; // int64
            export type Limit = number; // int32
            export type ResolutionStatus = ("resolved" | "open" | "dangling" | "reopened")[];
            export type Sort = /* The sort fields for comments. The default sort direction is ascending. To sort in descending order, append a `-` character before the sort field. For example, `fieldName` or `-fieldName`. */ Components.Schemas.CommentSortOrder;
            export type Status = ("current" | "deleted" | "trashed" | "historical" | "draft")[];
        }
        export interface PathParameters {
            id: Parameters.Id /* int64 */;
        }
        export interface QueryParameters {
            "body-format"?: Parameters.BodyFormat;
            status?: Parameters.Status;
            "resolution-status"?: Parameters.ResolutionStatus;
            sort?: Parameters.Sort;
            cursor?: Parameters.Cursor;
            limit?: Parameters.Limit /* int32 */;
        }
        namespace Responses {
            /**
             * MultiEntityResult<BlogPostInlineCommentModel>
             */
            export interface $200 {
                results?: Components.Schemas.BlogPostInlineCommentModel[];
                _links?: Components.Schemas.MultiEntityLinks;
            }
        }
    }
    namespace GetBlogPostLabels {
        namespace Parameters {
            export type Cursor = string;
            export type Id = number; // int64
            export type Limit = number; // int32
            export type Prefix = "my" | "team" | "global" | "system";
            export type Sort = string;
        }
        export interface PathParameters {
            id: Parameters.Id /* int64 */;
        }
        export interface QueryParameters {
            prefix?: Parameters.Prefix;
            sort?: Parameters.Sort;
            cursor?: Parameters.Cursor;
            limit?: Parameters.Limit /* int32 */;
        }
        namespace Responses {
            /**
             * MultiEntityResult<Label>
             */
            export interface $200 {
                results?: Components.Schemas.Label[];
                _links?: Components.Schemas.MultiEntityLinks;
            }
        }
    }
    namespace GetBlogPostLikeCount {
        namespace Parameters {
            export type Id = number; // int64
        }
        export interface PathParameters {
            id: Parameters.Id /* int64 */;
        }
        namespace Responses {
            /**
             * Integer
             */
            export interface $200 {
                /**
                 * The count number
                 */
                count?: number; // int64
            }
        }
    }
    namespace GetBlogPostLikeUsers {
        namespace Parameters {
            export type Cursor = string;
            export type Id = number; // int64
            export type Limit = number; // int32
        }
        export interface PathParameters {
            id: Parameters.Id /* int64 */;
        }
        export interface QueryParameters {
            cursor?: Parameters.Cursor;
            limit?: Parameters.Limit /* int32 */;
        }
        namespace Responses {
            /**
             * MultiEntityResult<String>
             */
            export interface $200 {
                results?: Components.Schemas.Like[];
                _links?: Components.Schemas.MultiEntityLinks;
            }
        }
    }
    namespace GetBlogPostOperations {
        namespace Parameters {
            export type Id = number; // int64
        }
        export interface PathParameters {
            id: Parameters.Id /* int64 */;
        }
        namespace Responses {
            export type $200 = /* The list of operations permitted on entity. */ Components.Schemas.PermittedOperationsResponse;
        }
    }
    namespace GetBlogPostVersionDetails {
        namespace Parameters {
            export type BlogpostId = number; // int64
            export type VersionNumber = number; // int64
        }
        export interface PathParameters {
            "blogpost-id": Parameters.BlogpostId /* int64 */;
            "version-number": Parameters.VersionNumber /* int64 */;
        }
        namespace Responses {
            export type $200 = Components.Schemas.DetailedVersion;
        }
    }
    namespace GetBlogPostVersions {
        namespace Parameters {
            export type BodyFormat = /* The primary formats a body can be represented as. A subset of BodyRepresentation. These formats are the only allowed formats in certain use cases. */ Components.Schemas.PrimaryBodyRepresentation;
            export type Cursor = string;
            export type Id = number; // int64
            export type Limit = number; // int32
            export type Sort = /* The sort fields for versions. The default sort direction is ascending. To sort in descending order, append a `-` character before the sort field. For example, `fieldName` or `-fieldName`. */ Components.Schemas.VersionSortOrder;
        }
        export interface PathParameters {
            id: Parameters.Id /* int64 */;
        }
        export interface QueryParameters {
            "body-format"?: Parameters.BodyFormat;
            cursor?: Parameters.Cursor;
            limit?: Parameters.Limit /* int32 */;
            sort?: Parameters.Sort;
        }
        namespace Responses {
            /**
             * MultiEntityResult<Version>
             */
            export interface $200 {
                results?: Components.Schemas.BlogPostVersion[];
                _links?: Components.Schemas.MultiEntityLinks;
            }
        }
    }
    namespace GetBlogPosts {
        namespace Parameters {
            export type BodyFormat = /* The primary formats a body can be represented as. A subset of BodyRepresentation. These formats are the only allowed formats in certain use cases. */ Components.Schemas.PrimaryBodyRepresentation;
            export type Cursor = string;
            export type Id = [
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?
            ];
            export type Limit = number; // int32
            export type Sort = /* The sort fields for blog posts. The default sort direction is ascending. To sort in descending order, append a `-` character before the sort field. For example, `fieldName` or `-fieldName`. */ Components.Schemas.BlogPostSortOrder;
            export type SpaceId = [
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?
            ];
            export type Status = ("current" | "deleted" | "trashed")[];
            export type Title = string;
        }
        export interface QueryParameters {
            id?: Parameters.Id;
            "space-id"?: Parameters.SpaceId;
            sort?: Parameters.Sort;
            status?: Parameters.Status;
            title?: Parameters.Title;
            "body-format"?: Parameters.BodyFormat;
            cursor?: Parameters.Cursor;
            limit?: Parameters.Limit /* int32 */;
        }
        namespace Responses {
            /**
             * MultiEntityResult<BlogPost>
             */
            export interface $200 {
                results?: Components.Schemas.BlogPostBulk[];
                _links?: Components.Schemas.MultiEntityLinks;
            }
        }
    }
    namespace GetBlogPostsInSpace {
        namespace Parameters {
            export type BodyFormat = /* The primary formats a body can be represented as. A subset of BodyRepresentation. These formats are the only allowed formats in certain use cases. */ Components.Schemas.PrimaryBodyRepresentation;
            export type Cursor = string;
            export type Id = number; // int64
            export type Limit = number; // int32
            export type Sort = /* The sort fields for blog posts. The default sort direction is ascending. To sort in descending order, append a `-` character before the sort field. For example, `fieldName` or `-fieldName`. */ Components.Schemas.BlogPostSortOrder;
            export type Status = ("current" | "deleted" | "trashed")[];
            export type Title = string;
        }
        export interface PathParameters {
            id: Parameters.Id /* int64 */;
        }
        export interface QueryParameters {
            sort?: Parameters.Sort;
            status?: Parameters.Status;
            title?: Parameters.Title;
            "body-format"?: Parameters.BodyFormat;
            cursor?: Parameters.Cursor;
            limit?: Parameters.Limit /* int32 */;
        }
        namespace Responses {
            /**
             * MultiEntityResult<BlogPost>
             */
            export interface $200 {
                results?: Components.Schemas.BlogPostBulk[];
                _links?: Components.Schemas.MultiEntityLinks;
            }
            export interface $404 {
            }
        }
    }
    namespace GetBlogpostAttachments {
        namespace Parameters {
            export type Cursor = string;
            export type Filename = string;
            export type Id = number; // int64
            export type Limit = number; // int32
            export type MediaType = string;
            export type Sort = /* The sort fields for attachments. The default sort direction is ascending. To sort in descending order, append a `-` character before the sort field. For example, `fieldName` or `-fieldName`. */ Components.Schemas.AttachmentSortOrder;
            export type Status = ("current" | "archived" | "trashed")[];
        }
        export interface PathParameters {
            id: Parameters.Id /* int64 */;
        }
        export interface QueryParameters {
            sort?: Parameters.Sort;
            cursor?: Parameters.Cursor;
            status?: Parameters.Status;
            mediaType?: Parameters.MediaType;
            filename?: Parameters.Filename;
            limit?: Parameters.Limit /* int32 */;
        }
        namespace Responses {
            /**
             * MultiEntityResult<Attachment>
             */
            export interface $200 {
                results?: Components.Schemas.AttachmentBulk[];
                _links?: Components.Schemas.MultiEntityLinks;
            }
        }
    }
    namespace GetBlogpostContentProperties {
        namespace Parameters {
            export type BlogpostId = number; // int64
            export type Cursor = string;
            export type Key = string;
            export type Limit = number; // int32
            export type Sort = /* The sort fields for content properties. The default sort direction is ascending. To sort in descending order, append a `-` character before the sort field. For example, `fieldName` or `-fieldName`. */ Components.Schemas.ContentPropertySortOrder;
        }
        export interface PathParameters {
            "blogpost-id": Parameters.BlogpostId /* int64 */;
        }
        export interface QueryParameters {
            key?: Parameters.Key;
            sort?: Parameters.Sort;
            cursor?: Parameters.Cursor;
            limit?: Parameters.Limit /* int32 */;
        }
        namespace Responses {
            /**
             * MultiEntityResult<ContentProperty>
             */
            export interface $200 {
                results?: Components.Schemas.ContentProperty[];
                _links?: Components.Schemas.MultiEntityLinks;
            }
        }
    }
    namespace GetBlogpostContentPropertiesById {
        namespace Parameters {
            export type BlogpostId = number; // int64
            export type PropertyId = number; // int64
        }
        export interface PathParameters {
            "blogpost-id": Parameters.BlogpostId /* int64 */;
            "property-id": Parameters.PropertyId /* int64 */;
        }
        namespace Responses {
            export type $200 = Components.Schemas.ContentProperty;
        }
    }
    namespace GetChildCustomContent {
        namespace Parameters {
            export type Cursor = string;
            export type Id = number; // int64
            export type Limit = number; // int32
            export type Sort = string;
        }
        export interface PathParameters {
            id: Parameters.Id /* int64 */;
        }
        export interface QueryParameters {
            cursor?: Parameters.Cursor;
            limit?: Parameters.Limit /* int32 */;
            sort?: Parameters.Sort;
        }
        namespace Responses {
            /**
             * MultiEntityResult<ChildCustomContent>
             */
            export interface $200 {
                results?: Components.Schemas.ChildCustomContent[];
                _links?: Components.Schemas.MultiEntityLinks;
            }
        }
    }
    namespace GetChildPages {
        namespace Parameters {
            export type Cursor = string;
            export type Id = number; // int64
            export type Limit = number; // int32
            export type Sort = string;
        }
        export interface PathParameters {
            id: Parameters.Id /* int64 */;
        }
        export interface QueryParameters {
            cursor?: Parameters.Cursor;
            limit?: Parameters.Limit /* int32 */;
            sort?: Parameters.Sort;
        }
        namespace Responses {
            /**
             * MultiEntityResult<ChildPage>
             */
            export interface $200 {
                results?: Components.Schemas.ChildPage[];
                _links?: Components.Schemas.MultiEntityLinks;
            }
        }
    }
    namespace GetClassificationLevels {
        namespace Responses {
            export type $200 = /**
             * ClassificationLevel
             * A unit of [data classification](https://support.atlassian.com/security-and-access-policies/docs/what-is-data-classification/) defined by an organiation.
             * A classification level may be associated with specific storage and handling requirements or expectations.
             */
            Components.Schemas.ClassificationLevel[];
            export interface $404 {
            }
        }
    }
    namespace GetCommentContentProperties {
        namespace Parameters {
            export type CommentId = number; // int64
            export type Cursor = string;
            export type Key = string;
            export type Limit = number; // int32
            export type Sort = /* The sort fields for content properties. The default sort direction is ascending. To sort in descending order, append a `-` character before the sort field. For example, `fieldName` or `-fieldName`. */ Components.Schemas.ContentPropertySortOrder;
        }
        export interface PathParameters {
            "comment-id": Parameters.CommentId /* int64 */;
        }
        export interface QueryParameters {
            key?: Parameters.Key;
            sort?: Parameters.Sort;
            cursor?: Parameters.Cursor;
            limit?: Parameters.Limit /* int32 */;
        }
        namespace Responses {
            /**
             * MultiEntityResult<ContentProperty>
             */
            export interface $200 {
                results?: Components.Schemas.ContentProperty[];
                _links?: Components.Schemas.MultiEntityLinks;
            }
        }
    }
    namespace GetCommentContentPropertiesById {
        namespace Parameters {
            export type CommentId = number; // int64
            export type PropertyId = number; // int64
        }
        export interface PathParameters {
            "comment-id": Parameters.CommentId /* int64 */;
            "property-id": Parameters.PropertyId /* int64 */;
        }
        namespace Responses {
            export type $200 = Components.Schemas.ContentProperty;
        }
    }
    namespace GetCustomContentAttachments {
        namespace Parameters {
            export type Cursor = string;
            export type Filename = string;
            export type Id = number; // int64
            export type Limit = number; // int32
            export type MediaType = string;
            export type Sort = /* The sort fields for attachments. The default sort direction is ascending. To sort in descending order, append a `-` character before the sort field. For example, `fieldName` or `-fieldName`. */ Components.Schemas.AttachmentSortOrder;
            export type Status = ("current" | "archived" | "trashed")[];
        }
        export interface PathParameters {
            id: Parameters.Id /* int64 */;
        }
        export interface QueryParameters {
            sort?: Parameters.Sort;
            cursor?: Parameters.Cursor;
            status?: Parameters.Status;
            mediaType?: Parameters.MediaType;
            filename?: Parameters.Filename;
            limit?: Parameters.Limit /* int32 */;
        }
        namespace Responses {
            /**
             * MultiEntityResult<Attachment>
             */
            export interface $200 {
                results?: Components.Schemas.AttachmentBulk[];
                _links?: Components.Schemas.MultiEntityLinks;
            }
        }
    }
    namespace GetCustomContentById {
        namespace Parameters {
            export type BodyFormat = /* The formats a custom content body can be represented as. A subset of BodyRepresentation. */ Components.Schemas.CustomContentBodyRepresentationSingle;
            export type Id = number; // int64
            export type IncludeCollaborators = boolean;
            export type IncludeLabels = boolean;
            export type IncludeOperations = boolean;
            export type IncludeProperties = boolean;
            export type IncludeVersion = boolean;
            export type IncludeVersions = boolean;
            export type Version = number;
        }
        export interface PathParameters {
            id: Parameters.Id /* int64 */;
        }
        export interface QueryParameters {
            "body-format"?: Parameters.BodyFormat;
            version?: Parameters.Version;
            "include-labels"?: Parameters.IncludeLabels;
            "include-properties"?: Parameters.IncludeProperties;
            "include-operations"?: Parameters.IncludeOperations;
            "include-versions"?: Parameters.IncludeVersions;
            "include-version"?: Parameters.IncludeVersion;
            "include-collaborators"?: Parameters.IncludeCollaborators;
        }
        namespace Responses {
            export interface $200 {
                /**
                 * ID of the custom content.
                 */
                id?: string;
                /**
                 * The type of custom content.
                 */
                type?: string;
                status?: /* The status of the content. */ Components.Schemas.ContentStatus;
                /**
                 * Title of the custom content.
                 */
                title?: string;
                /**
                 * ID of the space the custom content is in.
                 *
                 * Note: This is always returned, regardless of if the custom content has a container that is a space.
                 */
                spaceId?: string;
                /**
                 * ID of the containing page.
                 *
                 * Note: This is only returned if the custom content has a container that is a page.
                 */
                pageId?: string;
                /**
                 * ID of the containing blog post.
                 *
                 * Note: This is only returned if the custom content has a container that is a blog post.
                 */
                blogPostId?: string;
                /**
                 * ID of the containing custom content.
                 *
                 * Note: This is only returned if the custom content has a container that is custom content.
                 */
                customContentId?: string;
                /**
                 * The account ID of the user who created this custom content originally.
                 */
                authorId?: string;
                /**
                 * Date and time when the custom content was created. In format "YYYY-MM-DDTHH:mm:ss.sssZ".
                 */
                createdAt?: string; // date-time
                version?: Components.Schemas.Version;
                labels?: {
                    results?: Components.Schemas.Label[];
                    meta?: Components.Schemas.OptionalFieldMeta;
                    _links?: Components.Schemas.OptionalFieldLinks;
                };
                properties?: {
                    results?: Components.Schemas.ContentProperty[];
                    meta?: Components.Schemas.OptionalFieldMeta;
                    _links?: Components.Schemas.OptionalFieldLinks;
                };
                operations?: {
                    results?: Components.Schemas.Operation[];
                    meta?: Components.Schemas.OptionalFieldMeta;
                    _links?: Components.Schemas.OptionalFieldLinks;
                };
                versions?: {
                    results?: Components.Schemas.Version[];
                    meta?: Components.Schemas.OptionalFieldMeta;
                    _links?: Components.Schemas.OptionalFieldLinks;
                };
                body?: /* Contains fields for each representation type requested. */ Components.Schemas.CustomContentBodySingle;
                _links?: Components.Schemas.CustomContentLinks;
            }
        }
    }
    namespace GetCustomContentByType {
        namespace Parameters {
            export type BodyFormat = /* The formats a custom content body can be represented as. A subset of BodyRepresentation. */ Components.Schemas.CustomContentBodyRepresentation;
            export type Cursor = string;
            export type Id = [
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?
            ];
            export type Limit = number; // int32
            export type Sort = /* The sort fields for custom content. The default sort direction is ascending. To sort in descending order, append a `-` character before the sort field. For example, `fieldName` or `-fieldName`. */ Components.Schemas.CustomContentSortOrder;
            export type SpaceId = [
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?
            ];
            export type Type = string;
        }
        export interface QueryParameters {
            type: Parameters.Type;
            id?: Parameters.Id;
            "space-id"?: Parameters.SpaceId;
            sort?: Parameters.Sort;
            cursor?: Parameters.Cursor;
            limit?: Parameters.Limit /* int32 */;
            "body-format"?: Parameters.BodyFormat;
        }
        namespace Responses {
            /**
             * MultiEntityResult<CustomContent>
             */
            export interface $200 {
                results?: Components.Schemas.CustomContentBulk[];
                _links?: Components.Schemas.MultiEntityLinks;
            }
            export interface $404 {
            }
        }
    }
    namespace GetCustomContentByTypeInBlogPost {
        namespace Parameters {
            export type BodyFormat = /* The formats a custom content body can be represented as. A subset of BodyRepresentation. */ Components.Schemas.CustomContentBodyRepresentation;
            export type Cursor = string;
            export type Id = number; // int64
            export type Limit = number; // int32
            export type Sort = /* The sort fields for custom content. The default sort direction is ascending. To sort in descending order, append a `-` character before the sort field. For example, `fieldName` or `-fieldName`. */ Components.Schemas.CustomContentSortOrder;
            export type Type = string;
        }
        export interface PathParameters {
            id: Parameters.Id /* int64 */;
        }
        export interface QueryParameters {
            type: Parameters.Type;
            sort?: Parameters.Sort;
            cursor?: Parameters.Cursor;
            limit?: Parameters.Limit /* int32 */;
            "body-format"?: Parameters.BodyFormat;
        }
        namespace Responses {
            /**
             * MultiEntityResult<CustomContent>
             */
            export interface $200 {
                results?: Components.Schemas.CustomContentBulk[];
                _links?: Components.Schemas.MultiEntityLinks;
            }
            export interface $404 {
            }
        }
    }
    namespace GetCustomContentByTypeInPage {
        namespace Parameters {
            export type BodyFormat = /* The formats a custom content body can be represented as. A subset of BodyRepresentation. */ Components.Schemas.CustomContentBodyRepresentation;
            export type Cursor = string;
            export type Id = number; // int64
            export type Limit = number; // int32
            export type Sort = /* The sort fields for custom content. The default sort direction is ascending. To sort in descending order, append a `-` character before the sort field. For example, `fieldName` or `-fieldName`. */ Components.Schemas.CustomContentSortOrder;
            export type Type = string;
        }
        export interface PathParameters {
            id: Parameters.Id /* int64 */;
        }
        export interface QueryParameters {
            type: Parameters.Type;
            sort?: Parameters.Sort;
            cursor?: Parameters.Cursor;
            limit?: Parameters.Limit /* int32 */;
            "body-format"?: Parameters.BodyFormat;
        }
        namespace Responses {
            /**
             * MultiEntityResult<CustomContent>
             */
            export interface $200 {
                results?: Components.Schemas.CustomContentBulk[];
                _links?: Components.Schemas.MultiEntityLinks;
            }
            export interface $404 {
            }
        }
    }
    namespace GetCustomContentByTypeInSpace {
        namespace Parameters {
            export type BodyFormat = /* The formats a custom content body can be represented as. A subset of BodyRepresentation. */ Components.Schemas.CustomContentBodyRepresentation;
            export type Cursor = string;
            export type Id = number; // int64
            export type Limit = number; // int32
            export type Type = string;
        }
        export interface PathParameters {
            id: Parameters.Id /* int64 */;
        }
        export interface QueryParameters {
            type: Parameters.Type;
            cursor?: Parameters.Cursor;
            limit?: Parameters.Limit /* int32 */;
            "body-format"?: Parameters.BodyFormat;
        }
        namespace Responses {
            /**
             * MultiEntityResult<CustomContent>
             */
            export interface $200 {
                results?: Components.Schemas.CustomContentBulk[];
                _links?: Components.Schemas.MultiEntityLinks;
            }
            export interface $404 {
            }
        }
    }
    namespace GetCustomContentComments {
        namespace Parameters {
            export type BodyFormat = /* The primary formats a body can be represented as. A subset of BodyRepresentation. These formats are the only allowed formats in certain use cases. */ Components.Schemas.PrimaryBodyRepresentation;
            export type Cursor = string;
            export type Id = number; // int64
            export type Limit = number; // int32
            export type Sort = /* The sort fields for comments. The default sort direction is ascending. To sort in descending order, append a `-` character before the sort field. For example, `fieldName` or `-fieldName`. */ Components.Schemas.CommentSortOrder;
        }
        export interface PathParameters {
            id: Parameters.Id /* int64 */;
        }
        export interface QueryParameters {
            "body-format"?: Parameters.BodyFormat;
            cursor?: Parameters.Cursor;
            limit?: Parameters.Limit /* int32 */;
            sort?: Parameters.Sort;
        }
        namespace Responses {
            /**
             * MultiEntityResult<CustomContentCommentModel>
             */
            export interface $200 {
                results?: Components.Schemas.CustomContentCommentModel[];
                _links?: Components.Schemas.MultiEntityLinks;
            }
        }
    }
    namespace GetCustomContentContentProperties {
        namespace Parameters {
            export type Cursor = string;
            export type CustomContentId = number; // int64
            export type Key = string;
            export type Limit = number; // int32
            export type Sort = /* The sort fields for content properties. The default sort direction is ascending. To sort in descending order, append a `-` character before the sort field. For example, `fieldName` or `-fieldName`. */ Components.Schemas.ContentPropertySortOrder;
        }
        export interface PathParameters {
            "custom-content-id": Parameters.CustomContentId /* int64 */;
        }
        export interface QueryParameters {
            key?: Parameters.Key;
            sort?: Parameters.Sort;
            cursor?: Parameters.Cursor;
            limit?: Parameters.Limit /* int32 */;
        }
        namespace Responses {
            /**
             * MultiEntityResult<ContentProperty>
             */
            export interface $200 {
                results?: Components.Schemas.ContentProperty[];
                _links?: Components.Schemas.MultiEntityLinks;
            }
        }
    }
    namespace GetCustomContentContentPropertiesById {
        namespace Parameters {
            export type CustomContentId = number; // int64
            export type PropertyId = number; // int64
        }
        export interface PathParameters {
            "custom-content-id": Parameters.CustomContentId /* int64 */;
            "property-id": Parameters.PropertyId /* int64 */;
        }
        namespace Responses {
            export type $200 = Components.Schemas.ContentProperty;
        }
    }
    namespace GetCustomContentLabels {
        namespace Parameters {
            export type Cursor = string;
            export type Id = number; // int64
            export type Limit = number; // int32
            export type Prefix = "my" | "team" | "global" | "system";
            export type Sort = string;
        }
        export interface PathParameters {
            id: Parameters.Id /* int64 */;
        }
        export interface QueryParameters {
            prefix?: Parameters.Prefix;
            sort?: Parameters.Sort;
            cursor?: Parameters.Cursor;
            limit?: Parameters.Limit /* int32 */;
        }
        namespace Responses {
            /**
             * MultiEntityResult<Label>
             */
            export interface $200 {
                results?: Components.Schemas.Label[];
                _links?: Components.Schemas.MultiEntityLinks;
            }
        }
    }
    namespace GetCustomContentOperations {
        namespace Parameters {
            export type Id = number; // int64
        }
        export interface PathParameters {
            id: Parameters.Id /* int64 */;
        }
        namespace Responses {
            export type $200 = /* The list of operations permitted on entity. */ Components.Schemas.PermittedOperationsResponse;
        }
    }
    namespace GetCustomContentVersionDetails {
        namespace Parameters {
            export type CustomContentId = number; // int64
            export type VersionNumber = number; // int64
        }
        export interface PathParameters {
            "custom-content-id": Parameters.CustomContentId /* int64 */;
            "version-number": Parameters.VersionNumber /* int64 */;
        }
        namespace Responses {
            export type $200 = Components.Schemas.DetailedVersion;
        }
    }
    namespace GetCustomContentVersions {
        namespace Parameters {
            export type BodyFormat = /* The formats a custom content body can be represented as. A subset of BodyRepresentation. */ Components.Schemas.CustomContentBodyRepresentation;
            export type Cursor = string;
            export type CustomContentId = number; // int64
            export type Limit = number; // int32
            export type Sort = /* The sort fields for versions. The default sort direction is ascending. To sort in descending order, append a `-` character before the sort field. For example, `fieldName` or `-fieldName`. */ Components.Schemas.VersionSortOrder;
        }
        export interface PathParameters {
            "custom-content-id": Parameters.CustomContentId /* int64 */;
        }
        export interface QueryParameters {
            "body-format"?: Parameters.BodyFormat;
            cursor?: Parameters.Cursor;
            limit?: Parameters.Limit /* int32 */;
            sort?: Parameters.Sort;
        }
        namespace Responses {
            /**
             * MultiEntityResult<Version>
             */
            export interface $200 {
                results?: Components.Schemas.CustomContentVersion[];
                _links?: Components.Schemas.MultiEntityLinks;
            }
        }
    }
    namespace GetDataPolicyMetadata {
        namespace Responses {
            export type $200 = /* Details about data policies. */ Components.Schemas.DataPolicyMetadata;
            export interface $400 {
            }
            export interface $401 {
            }
        }
    }
    namespace GetDataPolicySpaces {
        namespace Parameters {
            export type Cursor = string;
            export type Ids = [
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?
            ];
            export type Keys = [
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?
            ];
            export type Limit = number; // int32
            export type Sort = /* The sort fields for spaces. The default sort direction is ascending. To sort in descending order, append a `-` character before the sort field. For example, `fieldName` or `-fieldName`. */ Components.Schemas.SpaceSortOrder;
        }
        export interface QueryParameters {
            ids?: Parameters.Ids;
            keys?: Parameters.Keys;
            sort?: Parameters.Sort;
            cursor?: Parameters.Cursor;
            limit?: Parameters.Limit /* int32 */;
        }
        namespace Responses {
            /**
             * MultiEntityResult<DataPolicySpace>
             */
            export interface $200 {
                results?: Components.Schemas.DataPolicySpace[];
                _links?: Components.Schemas.MultiEntityLinks;
            }
        }
    }
    namespace GetDatabaseAncestors {
        namespace Parameters {
            export type Id = number; // int64
            export type Limit = number; // int32
        }
        export interface PathParameters {
            id: Parameters.Id /* int64 */;
        }
        export interface QueryParameters {
            limit?: Parameters.Limit /* int32 */;
        }
        namespace Responses {
            /**
             * MultiEntityResult<Ancestor>
             */
            export interface $200 {
                results?: Components.Schemas.Ancestor[];
            }
            export interface $404 {
            }
        }
    }
    namespace GetDatabaseById {
        namespace Parameters {
            export type Id = number; // int64
            export type IncludeCollaborators = boolean;
            export type IncludeDirectChildren = boolean;
            export type IncludeOperations = boolean;
            export type IncludeProperties = boolean;
        }
        export interface PathParameters {
            id: Parameters.Id /* int64 */;
        }
        export interface QueryParameters {
            "include-collaborators"?: Parameters.IncludeCollaborators;
            "include-direct-children"?: Parameters.IncludeDirectChildren;
            "include-operations"?: Parameters.IncludeOperations;
            "include-properties"?: Parameters.IncludeProperties;
        }
        namespace Responses {
            export interface $200 {
                /**
                 * ID of the database.
                 */
                id?: string;
                /**
                 * The content type of the object.
                 */
                type?: string;
                status?: /* The status of the content. */ Components.Schemas.ContentStatus;
                /**
                 * Title of the database.
                 */
                title?: string;
                /**
                 * ID of the parent content, or null if there is no parent content.
                 */
                parentId?: string;
                parentType?: /* Content type of the parent, or null if there is no parent. */ Components.Schemas.ParentContentType;
                /**
                 * Position of the database within the given parent page tree.
                 */
                position?: number | null; // int32
                /**
                 * The account ID of the user who created this database originally.
                 */
                authorId?: string;
                /**
                 * The account ID of the user who owns this database.
                 */
                ownerId?: string;
                /**
                 * Date and time when the database was created. In format "YYYY-MM-DDTHH:mm:ss.sssZ".
                 */
                createdAt?: string; // date-time
                /**
                 * ID of the space the database is in.
                 */
                spaceId?: string;
                version?: Components.Schemas.Version;
                _links?: Components.Schemas.DatabaseLinks;
            }
        }
    }
    namespace GetDatabaseClassificationLevel {
        namespace Parameters {
            export type Id = number; // int64
        }
        export interface PathParameters {
            id: Parameters.Id /* int64 */;
        }
        namespace Responses {
            export type $200 = /**
             * ClassificationLevel
             * A unit of [data classification](https://support.atlassian.com/security-and-access-policies/docs/what-is-data-classification/) defined by an organiation.
             * A classification level may be associated with specific storage and handling requirements or expectations.
             */
            Components.Schemas.ClassificationLevel;
        }
    }
    namespace GetDatabaseContentProperties {
        namespace Parameters {
            export type Cursor = string;
            export type Id = number; // int64
            export type Key = string;
            export type Limit = number; // int32
            export type Sort = /* The sort fields for content properties. The default sort direction is ascending. To sort in descending order, append a `-` character before the sort field. For example, `fieldName` or `-fieldName`. */ Components.Schemas.ContentPropertySortOrder;
        }
        export interface PathParameters {
            id: Parameters.Id /* int64 */;
        }
        export interface QueryParameters {
            key?: Parameters.Key;
            sort?: Parameters.Sort;
            cursor?: Parameters.Cursor;
            limit?: Parameters.Limit /* int32 */;
        }
        namespace Responses {
            /**
             * MultiEntityResult<ContentProperty>
             */
            export interface $200 {
                results?: Components.Schemas.ContentProperty[];
                _links?: Components.Schemas.MultiEntityLinks;
            }
        }
    }
    namespace GetDatabaseContentPropertiesById {
        namespace Parameters {
            export type DatabaseId = number; // int64
            export type PropertyId = number; // int64
        }
        export interface PathParameters {
            "database-id": Parameters.DatabaseId /* int64 */;
            "property-id": Parameters.PropertyId /* int64 */;
        }
        namespace Responses {
            export type $200 = Components.Schemas.ContentProperty;
        }
    }
    namespace GetDatabaseDescendants {
        namespace Parameters {
            export type Cursor = string;
            export type Depth = number; // int32
            export type Id = number; // int64
            export type Limit = number; // int32
        }
        export interface PathParameters {
            id: Parameters.Id /* int64 */;
        }
        export interface QueryParameters {
            limit?: Parameters.Limit /* int32 */;
            depth?: Parameters.Depth /* int32 */;
            cursor?: Parameters.Cursor;
        }
        namespace Responses {
            /**
             * MultiEntityResult<DescendantsResponse>
             */
            export interface $200 {
                results?: Components.Schemas.DescendantsResponse[];
                _links?: Components.Schemas.MultiEntityLinks;
            }
        }
    }
    namespace GetDatabaseDirectChildren {
        namespace Parameters {
            export type Cursor = string;
            export type Id = number; // int64
            export type Limit = number; // int32
            export type Sort = string;
        }
        export interface PathParameters {
            id: Parameters.Id /* int64 */;
        }
        export interface QueryParameters {
            cursor?: Parameters.Cursor;
            limit?: Parameters.Limit /* int32 */;
            sort?: Parameters.Sort;
        }
        namespace Responses {
            /**
             * MultiEntityResult<ChildrenResponse>
             */
            export interface $200 {
                results?: Components.Schemas.ChildrenResponse[];
                _links?: Components.Schemas.MultiEntityLinks;
            }
        }
    }
    namespace GetDatabaseOperations {
        namespace Parameters {
            export type Id = number; // int64
        }
        export interface PathParameters {
            id: Parameters.Id /* int64 */;
        }
        namespace Responses {
            export type $200 = /* The list of operations permitted on entity. */ Components.Schemas.PermittedOperationsResponse;
        }
    }
    namespace GetFolderAncestors {
        namespace Parameters {
            export type Id = number; // int64
            export type Limit = number; // int32
        }
        export interface PathParameters {
            id: Parameters.Id /* int64 */;
        }
        export interface QueryParameters {
            limit?: Parameters.Limit /* int32 */;
        }
        namespace Responses {
            /**
             * MultiEntityResult<Ancestor>
             */
            export interface $200 {
                results?: Components.Schemas.Ancestor[];
            }
            export interface $404 {
            }
        }
    }
    namespace GetFolderById {
        namespace Parameters {
            export type Id = number; // int64
            export type IncludeCollaborators = boolean;
            export type IncludeDirectChildren = boolean;
            export type IncludeOperations = boolean;
            export type IncludeProperties = boolean;
        }
        export interface PathParameters {
            id: Parameters.Id /* int64 */;
        }
        export interface QueryParameters {
            "include-collaborators"?: Parameters.IncludeCollaborators;
            "include-direct-children"?: Parameters.IncludeDirectChildren;
            "include-operations"?: Parameters.IncludeOperations;
            "include-properties"?: Parameters.IncludeProperties;
        }
        namespace Responses {
            export interface $200 {
                /**
                 * ID of the folder.
                 */
                id?: string;
                /**
                 * The content type of the object.
                 */
                type?: string;
                status?: /* The status of the content. */ Components.Schemas.ContentStatus;
                /**
                 * Title of the folder.
                 */
                title?: string;
                /**
                 * ID of the parent content, or null if there is no parent content.
                 */
                parentId?: string;
                parentType?: /* Content type of the parent, or null if there is no parent. */ Components.Schemas.ParentContentType;
                /**
                 * Position of the folder within the given parent page tree.
                 */
                position?: number | null; // int32
                /**
                 * The account ID of the user who created this folder.
                 */
                authorId?: string;
                /**
                 * The account ID of the user who owns this folder.
                 */
                ownerId?: string;
                /**
                 * Date and time when the folder was created. In format "YYYY-MM-DDTHH:mm:ss.sssZ".
                 */
                createdAt?: string; // date-time
                /**
                 * ID of the space the folder is in.
                 */
                spaceId?: string;
                version?: Components.Schemas.Version;
                _links?: Components.Schemas.FolderLinks;
            }
        }
    }
    namespace GetFolderContentProperties {
        namespace Parameters {
            export type Cursor = string;
            export type Id = number; // int64
            export type Key = string;
            export type Limit = number; // int32
            export type Sort = /* The sort fields for content properties. The default sort direction is ascending. To sort in descending order, append a `-` character before the sort field. For example, `fieldName` or `-fieldName`. */ Components.Schemas.ContentPropertySortOrder;
        }
        export interface PathParameters {
            id: Parameters.Id /* int64 */;
        }
        export interface QueryParameters {
            key?: Parameters.Key;
            sort?: Parameters.Sort;
            cursor?: Parameters.Cursor;
            limit?: Parameters.Limit /* int32 */;
        }
        namespace Responses {
            /**
             * MultiEntityResult<ContentProperty>
             */
            export interface $200 {
                results?: Components.Schemas.ContentProperty[];
                _links?: Components.Schemas.MultiEntityLinks;
            }
        }
    }
    namespace GetFolderContentPropertiesById {
        namespace Parameters {
            export type FolderId = number; // int64
            export type PropertyId = number; // int64
        }
        export interface PathParameters {
            "folder-id": Parameters.FolderId /* int64 */;
            "property-id": Parameters.PropertyId /* int64 */;
        }
        namespace Responses {
            export type $200 = Components.Schemas.ContentProperty;
        }
    }
    namespace GetFolderDescendants {
        namespace Parameters {
            export type Cursor = string;
            export type Depth = number; // int32
            export type Id = number; // int64
            export type Limit = number; // int32
        }
        export interface PathParameters {
            id: Parameters.Id /* int64 */;
        }
        export interface QueryParameters {
            limit?: Parameters.Limit /* int32 */;
            depth?: Parameters.Depth /* int32 */;
            cursor?: Parameters.Cursor;
        }
        namespace Responses {
            /**
             * MultiEntityResult<DescendantsResponse>
             */
            export interface $200 {
                results?: Components.Schemas.DescendantsResponse[];
                _links?: Components.Schemas.MultiEntityLinks;
            }
        }
    }
    namespace GetFolderDirectChildren {
        namespace Parameters {
            export type Cursor = string;
            export type Id = number; // int64
            export type Limit = number; // int32
            export type Sort = string;
        }
        export interface PathParameters {
            id: Parameters.Id /* int64 */;
        }
        export interface QueryParameters {
            cursor?: Parameters.Cursor;
            limit?: Parameters.Limit /* int32 */;
            sort?: Parameters.Sort;
        }
        namespace Responses {
            /**
             * MultiEntityResult<ChildrenResponse>
             */
            export interface $200 {
                results?: Components.Schemas.ChildrenResponse[];
                _links?: Components.Schemas.MultiEntityLinks;
            }
        }
    }
    namespace GetFolderOperations {
        namespace Parameters {
            export type Id = number; // int64
        }
        export interface PathParameters {
            id: Parameters.Id /* int64 */;
        }
        namespace Responses {
            export type $200 = /* The list of operations permitted on entity. */ Components.Schemas.PermittedOperationsResponse;
        }
    }
    namespace GetFooterCommentById {
        namespace Parameters {
            export type BodyFormat = /* The primary formats a body can be represented as. A subset of BodyRepresentation. These formats are the only allowed formats in certain use cases. */ Components.Schemas.PrimaryBodyRepresentationSingle;
            export type CommentId = number; // int64
            export type IncludeLikes = boolean;
            export type IncludeOperations = boolean;
            export type IncludeProperties = boolean;
            export type IncludeVersion = boolean;
            export type IncludeVersions = boolean;
            export type Version = number;
        }
        export interface PathParameters {
            "comment-id": Parameters.CommentId /* int64 */;
        }
        export interface QueryParameters {
            "body-format"?: Parameters.BodyFormat;
            version?: Parameters.Version;
            "include-properties"?: Parameters.IncludeProperties;
            "include-operations"?: Parameters.IncludeOperations;
            "include-likes"?: Parameters.IncludeLikes;
            "include-versions"?: Parameters.IncludeVersions;
            "include-version"?: Parameters.IncludeVersion;
        }
        namespace Responses {
            export interface $200 {
                /**
                 * ID of the comment.
                 */
                id?: string;
                status?: /* The status of the content. */ Components.Schemas.ContentStatus;
                /**
                 * Title of the comment.
                 */
                title?: string;
                /**
                 * ID of the blog post containing the comment if the comment is on a blog post.
                 */
                blogPostId?: string;
                /**
                 * ID of the page containing the comment if the comment is on a page.
                 */
                pageId?: string;
                /**
                 * ID of the attachment containing the comment if the comment is on an attachment.
                 */
                attachmentId?: string;
                /**
                 * ID of the custom content containing the comment if the comment is on a custom content.
                 */
                customContentId?: string;
                /**
                 * ID of the parent comment if the comment is a reply.
                 */
                parentCommentId?: string;
                version?: Components.Schemas.Version;
                properties?: {
                    results?: Components.Schemas.ContentProperty[];
                    meta?: Components.Schemas.OptionalFieldMeta;
                    _links?: Components.Schemas.OptionalFieldLinks;
                };
                operations?: {
                    results?: Components.Schemas.Operation[];
                    meta?: Components.Schemas.OptionalFieldMeta;
                    _links?: Components.Schemas.OptionalFieldLinks;
                };
                likes?: {
                    results?: Components.Schemas.Like[];
                    meta?: Components.Schemas.OptionalFieldMeta;
                    _links?: Components.Schemas.OptionalFieldLinks;
                };
                versions?: {
                    results?: Components.Schemas.Version[];
                    meta?: Components.Schemas.OptionalFieldMeta;
                    _links?: Components.Schemas.OptionalFieldLinks;
                };
                body?: /* Contains fields for each representation type requested. */ Components.Schemas.BodySingle;
                _links?: Components.Schemas.CommentLinks;
            }
        }
    }
    namespace GetFooterCommentChildren {
        namespace Parameters {
            export type BodyFormat = /* The primary formats a body can be represented as. A subset of BodyRepresentation. These formats are the only allowed formats in certain use cases. */ Components.Schemas.PrimaryBodyRepresentation;
            export type Cursor = string;
            export type Id = number; // int64
            export type Limit = number; // int32
            export type Sort = /* The sort fields for comments. The default sort direction is ascending. To sort in descending order, append a `-` character before the sort field. For example, `fieldName` or `-fieldName`. */ Components.Schemas.CommentSortOrder;
        }
        export interface PathParameters {
            id: Parameters.Id /* int64 */;
        }
        export interface QueryParameters {
            "body-format"?: Parameters.BodyFormat;
            sort?: Parameters.Sort;
            cursor?: Parameters.Cursor;
            limit?: Parameters.Limit /* int32 */;
        }
        namespace Responses {
            /**
             * MultiEntityResult<ChildrenCommentModel>
             */
            export interface $200 {
                results?: Components.Schemas.ChildrenCommentModel[];
                _links?: Components.Schemas.MultiEntityLinks;
            }
        }
    }
    namespace GetFooterCommentOperations {
        namespace Parameters {
            export type Id = number; // int64
        }
        export interface PathParameters {
            id: Parameters.Id /* int64 */;
        }
        namespace Responses {
            export type $200 = /* The list of operations permitted on entity. */ Components.Schemas.PermittedOperationsResponse;
        }
    }
    namespace GetFooterCommentVersionDetails {
        namespace Parameters {
            export type Id = number; // int64
            export type VersionNumber = number; // int64
        }
        export interface PathParameters {
            id: Parameters.Id /* int64 */;
            "version-number": Parameters.VersionNumber /* int64 */;
        }
        namespace Responses {
            export type $200 = Components.Schemas.DetailedVersion;
        }
    }
    namespace GetFooterCommentVersions {
        namespace Parameters {
            export type BodyFormat = /* The primary formats a body can be represented as. A subset of BodyRepresentation. These formats are the only allowed formats in certain use cases. */ Components.Schemas.PrimaryBodyRepresentation;
            export type Cursor = string;
            export type Id = number; // int64
            export type Limit = number; // int32
            export type Sort = /* The sort fields for versions. The default sort direction is ascending. To sort in descending order, append a `-` character before the sort field. For example, `fieldName` or `-fieldName`. */ Components.Schemas.VersionSortOrder;
        }
        export interface PathParameters {
            id: Parameters.Id /* int64 */;
        }
        export interface QueryParameters {
            "body-format"?: Parameters.BodyFormat;
            cursor?: Parameters.Cursor;
            limit?: Parameters.Limit /* int32 */;
            sort?: Parameters.Sort;
        }
        namespace Responses {
            /**
             * MultiEntityResult<Version>
             */
            export interface $200 {
                results?: Components.Schemas.CommentVersion[];
                _links?: Components.Schemas.MultiEntityLinks;
            }
        }
    }
    namespace GetFooterComments {
        namespace Parameters {
            export type BodyFormat = /* The primary formats a body can be represented as. A subset of BodyRepresentation. These formats are the only allowed formats in certain use cases. */ Components.Schemas.PrimaryBodyRepresentation;
            export type Cursor = string;
            export type Limit = number; // int32
            export type Sort = /* The sort fields for comments. The default sort direction is ascending. To sort in descending order, append a `-` character before the sort field. For example, `fieldName` or `-fieldName`. */ Components.Schemas.CommentSortOrder;
        }
        export interface QueryParameters {
            "body-format"?: Parameters.BodyFormat;
            sort?: Parameters.Sort;
            cursor?: Parameters.Cursor;
            limit?: Parameters.Limit /* int32 */;
        }
        namespace Responses {
            /**
             * MultiEntityResult<FooterCommentModel>
             */
            export interface $200 {
                results?: Components.Schemas.FooterCommentModel[];
                _links?: Components.Schemas.MultiEntityLinks;
            }
        }
    }
    namespace GetFooterLikeCount {
        namespace Parameters {
            export type Id = number; // int64
        }
        export interface PathParameters {
            id: Parameters.Id /* int64 */;
        }
        namespace Responses {
            /**
             * Integer
             */
            export interface $200 {
                /**
                 * The count number
                 */
                count?: number; // int64
            }
        }
    }
    namespace GetFooterLikeUsers {
        namespace Parameters {
            export type Cursor = string;
            export type Id = number; // int64
            export type Limit = number; // int32
        }
        export interface PathParameters {
            id: Parameters.Id /* int64 */;
        }
        export interface QueryParameters {
            cursor?: Parameters.Cursor;
            limit?: Parameters.Limit /* int32 */;
        }
        namespace Responses {
            /**
             * MultiEntityResult<String>
             */
            export interface $200 {
                results?: Components.Schemas.Like[];
                _links?: Components.Schemas.MultiEntityLinks;
            }
        }
    }
    namespace GetForgeAppProperties {
        namespace Parameters {
            export type Cursor = string;
            export type Limit = number; // int32
        }
        export interface QueryParameters {
            cursor?: Parameters.Cursor;
            limit?: Parameters.Limit /* int32 */;
        }
        namespace Responses {
            /**
             * MultiEntityResult<AppProperty>
             */
            export interface $200 {
                results?: {
                    /**
                     * The key of the property
                     */
                    key?: string;
                    /**
                     * The value of the property
                     */
                    value?: {
                        [key: string]: any;
                    };
                }[];
                _links?: Components.Schemas.MultiEntityLinks;
            }
            export interface $401 {
            }
            export interface $403 {
            }
        }
    }
    namespace GetForgeAppProperty {
        namespace Parameters {
            export type PropertyKey = string;
        }
        export interface PathParameters {
            propertyKey: Parameters.PropertyKey;
        }
        namespace Responses {
            /**
             * example:
             * {
             *   "key": "user-preferences",
             *   "value": {
             *     "theme": "dark",
             *     "language": "en"
             *   }
             * }
             */
            export interface $200 {
                /**
                 * The key of the property
                 */
                key?: string;
                /**
                 * The value of the property
                 */
                value?: {
                    [key: string]: any;
                };
            }
            export interface $400 {
            }
            export interface $401 {
            }
            export interface $403 {
            }
            export interface $404 {
            }
        }
    }
    namespace GetInlineCommentById {
        namespace Parameters {
            export type BodyFormat = /* The primary formats a body can be represented as. A subset of BodyRepresentation. These formats are the only allowed formats in certain use cases. */ Components.Schemas.PrimaryBodyRepresentationSingle;
            export type CommentId = number; // int64
            export type IncludeLikes = boolean;
            export type IncludeOperations = boolean;
            export type IncludeProperties = boolean;
            export type IncludeVersion = boolean;
            export type IncludeVersions = boolean;
            export type Version = number;
        }
        export interface PathParameters {
            "comment-id": Parameters.CommentId /* int64 */;
        }
        export interface QueryParameters {
            "body-format"?: Parameters.BodyFormat;
            version?: Parameters.Version;
            "include-properties"?: Parameters.IncludeProperties;
            "include-operations"?: Parameters.IncludeOperations;
            "include-likes"?: Parameters.IncludeLikes;
            "include-versions"?: Parameters.IncludeVersions;
            "include-version"?: Parameters.IncludeVersion;
        }
        namespace Responses {
            export interface $200 {
                /**
                 * ID of the comment.
                 */
                id?: string;
                status?: /* The status of the content. */ Components.Schemas.ContentStatus;
                /**
                 * Title of the comment.
                 */
                title?: string;
                /**
                 * ID of the blog post containing the comment if the comment is on a blog post.
                 */
                blogPostId?: string;
                /**
                 * ID of the page containing the comment if the comment is on a page.
                 */
                pageId?: string;
                /**
                 * ID of the parent comment if the comment is a reply.
                 */
                parentCommentId?: string;
                version?: Components.Schemas.Version;
                body?: /* Contains fields for each representation type requested. */ Components.Schemas.BodySingle;
                /**
                 * Atlassian Account ID of last person who modified the resolve state of the comment. Null until comment is resolved or reopened.
                 */
                resolutionLastModifierId?: string;
                /**
                 * Timestamp of the last modification to the comment's resolution status. Null until comment is resolved or reopened.
                 */
                resolutionLastModifiedAt?: string; // date-time
                resolutionStatus?: /* Inline comment resolution status */ Components.Schemas.InlineCommentResolutionStatus;
                properties?: {
                    results?: Components.Schemas.ContentProperty[];
                    meta?: Components.Schemas.OptionalFieldMeta;
                    _links?: Components.Schemas.OptionalFieldLinks;
                    /**
                     * Property value used to reference the highlighted element in DOM.
                     */
                    inlineMarkerRef?: string;
                    /**
                     * Text that is highlighted.
                     */
                    inlineOriginalSelection?: string;
                };
                operations?: {
                    results?: Components.Schemas.Operation[];
                    meta?: Components.Schemas.OptionalFieldMeta;
                    _links?: Components.Schemas.OptionalFieldLinks;
                };
                likes?: {
                    results?: Components.Schemas.Like[];
                    meta?: Components.Schemas.OptionalFieldMeta;
                    _links?: Components.Schemas.OptionalFieldLinks;
                };
                versions?: {
                    results?: Components.Schemas.Version[];
                    meta?: Components.Schemas.OptionalFieldMeta;
                    _links?: Components.Schemas.OptionalFieldLinks;
                };
                _links?: Components.Schemas.CommentLinks;
            }
        }
    }
    namespace GetInlineCommentChildren {
        namespace Parameters {
            export type BodyFormat = /* The primary formats a body can be represented as. A subset of BodyRepresentation. These formats are the only allowed formats in certain use cases. */ Components.Schemas.PrimaryBodyRepresentation;
            export type Cursor = string;
            export type Id = number; // int64
            export type Limit = number; // int32
            export type Sort = /* The sort fields for comments. The default sort direction is ascending. To sort in descending order, append a `-` character before the sort field. For example, `fieldName` or `-fieldName`. */ Components.Schemas.CommentSortOrder;
        }
        export interface PathParameters {
            id: Parameters.Id /* int64 */;
        }
        export interface QueryParameters {
            "body-format"?: Parameters.BodyFormat;
            sort?: Parameters.Sort;
            cursor?: Parameters.Cursor;
            limit?: Parameters.Limit /* int32 */;
        }
        namespace Responses {
            /**
             * MultiEntityResult<InlineCommentChildrenModel>
             */
            export interface $200 {
                results?: Components.Schemas.InlineCommentChildrenModel[];
                _links?: Components.Schemas.MultiEntityLinks;
            }
        }
    }
    namespace GetInlineCommentOperations {
        namespace Parameters {
            export type Id = number; // int64
        }
        export interface PathParameters {
            id: Parameters.Id /* int64 */;
        }
        namespace Responses {
            export type $200 = /* The list of operations permitted on entity. */ Components.Schemas.PermittedOperationsResponse;
        }
    }
    namespace GetInlineCommentVersionDetails {
        namespace Parameters {
            export type Id = number; // int64
            export type VersionNumber = number; // int64
        }
        export interface PathParameters {
            id: Parameters.Id /* int64 */;
            "version-number": Parameters.VersionNumber /* int64 */;
        }
        namespace Responses {
            export type $200 = Components.Schemas.DetailedVersion;
        }
    }
    namespace GetInlineCommentVersions {
        namespace Parameters {
            export type BodyFormat = /* The primary formats a body can be represented as. A subset of BodyRepresentation. These formats are the only allowed formats in certain use cases. */ Components.Schemas.PrimaryBodyRepresentation;
            export type Cursor = string;
            export type Id = number; // int64
            export type Limit = number; // int32
            export type Sort = /* The sort fields for versions. The default sort direction is ascending. To sort in descending order, append a `-` character before the sort field. For example, `fieldName` or `-fieldName`. */ Components.Schemas.VersionSortOrder;
        }
        export interface PathParameters {
            id: Parameters.Id /* int64 */;
        }
        export interface QueryParameters {
            "body-format"?: Parameters.BodyFormat;
            cursor?: Parameters.Cursor;
            limit?: Parameters.Limit /* int32 */;
            sort?: Parameters.Sort;
        }
        namespace Responses {
            /**
             * MultiEntityResult<Version>
             */
            export interface $200 {
                results?: Components.Schemas.CommentVersion[];
                _links?: Components.Schemas.MultiEntityLinks;
            }
        }
    }
    namespace GetInlineComments {
        namespace Parameters {
            export type BodyFormat = /* The primary formats a body can be represented as. A subset of BodyRepresentation. These formats are the only allowed formats in certain use cases. */ Components.Schemas.PrimaryBodyRepresentation;
            export type Cursor = string;
            export type Limit = number; // int32
            export type Sort = /* The sort fields for comments. The default sort direction is ascending. To sort in descending order, append a `-` character before the sort field. For example, `fieldName` or `-fieldName`. */ Components.Schemas.CommentSortOrder;
        }
        export interface QueryParameters {
            "body-format"?: Parameters.BodyFormat;
            sort?: Parameters.Sort;
            cursor?: Parameters.Cursor;
            limit?: Parameters.Limit /* int32 */;
        }
        namespace Responses {
            /**
             * MultiEntityResult<InlineCommentModel>
             */
            export interface $200 {
                results?: Components.Schemas.InlineCommentModel[];
                _links?: Components.Schemas.MultiEntityLinks;
            }
        }
    }
    namespace GetInlineLikeCount {
        namespace Parameters {
            export type Id = number; // int64
        }
        export interface PathParameters {
            id: Parameters.Id /* int64 */;
        }
        namespace Responses {
            /**
             * Integer
             */
            export interface $200 {
                /**
                 * The count number
                 */
                count?: number; // int64
            }
        }
    }
    namespace GetInlineLikeUsers {
        namespace Parameters {
            export type Cursor = string;
            export type Id = number; // int64
            export type Limit = number; // int32
        }
        export interface PathParameters {
            id: Parameters.Id /* int64 */;
        }
        export interface QueryParameters {
            cursor?: Parameters.Cursor;
            limit?: Parameters.Limit /* int32 */;
        }
        namespace Responses {
            /**
             * MultiEntityResult<String>
             */
            export interface $200 {
                results?: Components.Schemas.Like[];
                _links?: Components.Schemas.MultiEntityLinks;
            }
        }
    }
    namespace GetLabelAttachments {
        namespace Parameters {
            export type Cursor = string;
            export type Id = number; // int64
            export type Limit = number; // int32
            export type Sort = /* The sort fields for attachments. The default sort direction is ascending. To sort in descending order, append a `-` character before the sort field. For example, `fieldName` or `-fieldName`. */ Components.Schemas.AttachmentSortOrder;
        }
        export interface PathParameters {
            id: Parameters.Id /* int64 */;
        }
        export interface QueryParameters {
            sort?: Parameters.Sort;
            cursor?: Parameters.Cursor;
            limit?: Parameters.Limit /* int32 */;
        }
        namespace Responses {
            /**
             * MultiEntityResult<Attachment>
             */
            export interface $200 {
                results?: Components.Schemas.AttachmentBulk[];
                _links?: Components.Schemas.MultiEntityLinks;
            }
        }
    }
    namespace GetLabelBlogPosts {
        namespace Parameters {
            export type BodyFormat = /* The primary formats a body can be represented as. A subset of BodyRepresentation. These formats are the only allowed formats in certain use cases. */ Components.Schemas.PrimaryBodyRepresentation;
            export type Cursor = string;
            export type Id = number; // int64
            export type Limit = number; // int32
            export type Sort = /* The sort fields for blog posts. The default sort direction is ascending. To sort in descending order, append a `-` character before the sort field. For example, `fieldName` or `-fieldName`. */ Components.Schemas.BlogPostSortOrder;
            export type SpaceId = [
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?
            ];
        }
        export interface PathParameters {
            id: Parameters.Id /* int64 */;
        }
        export interface QueryParameters {
            "space-id"?: Parameters.SpaceId;
            "body-format"?: Parameters.BodyFormat;
            sort?: Parameters.Sort;
            cursor?: Parameters.Cursor;
            limit?: Parameters.Limit /* int32 */;
        }
        namespace Responses {
            /**
             * MultiEntityResult<BlogPost>
             */
            export interface $200 {
                results?: Components.Schemas.BlogPostBulk[];
                _links?: Components.Schemas.MultiEntityLinks;
            }
        }
    }
    namespace GetLabelPages {
        namespace Parameters {
            export type BodyFormat = /* The primary formats a body can be represented as. A subset of BodyRepresentation. These formats are the only allowed formats in certain use cases. */ Components.Schemas.PrimaryBodyRepresentation;
            export type Cursor = string;
            export type Id = number; // int64
            export type Limit = number; // int32
            export type Sort = /* The sort fields for pages. The default sort direction is ascending. To sort in descending order, append a `-` character before the sort field. For example, `fieldName` or `-fieldName`. */ Components.Schemas.PageSortOrder;
            export type SpaceId = [
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?
            ];
        }
        export interface PathParameters {
            id: Parameters.Id /* int64 */;
        }
        export interface QueryParameters {
            "space-id"?: Parameters.SpaceId;
            "body-format"?: Parameters.BodyFormat;
            sort?: Parameters.Sort;
            cursor?: Parameters.Cursor;
            limit?: Parameters.Limit /* int32 */;
        }
        namespace Responses {
            /**
             * MultiEntityResult<Page>
             */
            export interface $200 {
                results?: Components.Schemas.PageBulk[];
                _links?: Components.Schemas.MultiEntityLinks;
            }
        }
    }
    namespace GetLabels {
        namespace Parameters {
            export type Cursor = string;
            export type LabelId = number /* int64 */[];
            export type Limit = number; // int32
            export type Prefix = string[];
            export type Sort = string;
        }
        export interface QueryParameters {
            "label-id"?: Parameters.LabelId;
            prefix?: Parameters.Prefix;
            cursor?: Parameters.Cursor;
            sort?: Parameters.Sort;
            limit?: Parameters.Limit /* int32 */;
        }
        namespace Responses {
            /**
             * MultiEntityResult<Label>
             */
            export interface $200 {
                results?: Components.Schemas.Label[];
                _links?: Components.Schemas.MultiEntityLinks;
            }
        }
    }
    namespace GetPageAncestors {
        namespace Parameters {
            export type Id = number; // int64
            export type Limit = number; // int32
        }
        export interface PathParameters {
            id: Parameters.Id /* int64 */;
        }
        export interface QueryParameters {
            limit?: Parameters.Limit /* int32 */;
        }
        namespace Responses {
            /**
             * MultiEntityResult<Ancestor>
             */
            export interface $200 {
                results?: Components.Schemas.Ancestor[];
                _links?: Components.Schemas.MultiEntityLinks;
            }
            export interface $404 {
            }
        }
    }
    namespace GetPageAttachments {
        namespace Parameters {
            export type Cursor = string;
            export type Filename = string;
            export type Id = number; // int64
            export type Limit = number; // int32
            export type MediaType = string;
            export type Sort = /* The sort fields for attachments. The default sort direction is ascending. To sort in descending order, append a `-` character before the sort field. For example, `fieldName` or `-fieldName`. */ Components.Schemas.AttachmentSortOrder;
            export type Status = ("current" | "archived" | "trashed")[];
        }
        export interface PathParameters {
            id: Parameters.Id /* int64 */;
        }
        export interface QueryParameters {
            sort?: Parameters.Sort;
            cursor?: Parameters.Cursor;
            status?: Parameters.Status;
            mediaType?: Parameters.MediaType;
            filename?: Parameters.Filename;
            limit?: Parameters.Limit /* int32 */;
        }
        namespace Responses {
            /**
             * MultiEntityResult<Attachment>
             */
            export interface $200 {
                results?: Components.Schemas.AttachmentBulk[];
                _links?: Components.Schemas.MultiEntityLinks;
            }
        }
    }
    namespace GetPageById {
        namespace Parameters {
            export type BodyFormat = /* The primary formats a body can be represented as. A subset of BodyRepresentation. These formats are the only allowed formats in certain use cases. */ Components.Schemas.PrimaryBodyRepresentationSingle;
            export type GetDraft = boolean;
            export type Id = number; // int64
            export type IncludeCollaborators = boolean;
            export type IncludeDirectChildren = boolean;
            export type IncludeFavoritedByCurrentUserStatus = boolean;
            export type IncludeLabels = boolean;
            export type IncludeLikes = boolean;
            export type IncludeOperations = boolean;
            export type IncludeProperties = boolean;
            export type IncludeVersion = boolean;
            export type IncludeVersions = boolean;
            export type IncludeWebresources = boolean;
            export type Status = ("current" | "archived" | "trashed" | "deleted" | "historical" | "draft")[];
            export type Version = number;
        }
        export interface PathParameters {
            id: Parameters.Id /* int64 */;
        }
        export interface QueryParameters {
            "body-format"?: Parameters.BodyFormat;
            "get-draft"?: Parameters.GetDraft;
            status?: Parameters.Status;
            version?: Parameters.Version;
            "include-labels"?: Parameters.IncludeLabels;
            "include-properties"?: Parameters.IncludeProperties;
            "include-operations"?: Parameters.IncludeOperations;
            "include-likes"?: Parameters.IncludeLikes;
            "include-versions"?: Parameters.IncludeVersions;
            "include-version"?: Parameters.IncludeVersion;
            "include-favorited-by-current-user-status"?: Parameters.IncludeFavoritedByCurrentUserStatus;
            "include-webresources"?: Parameters.IncludeWebresources;
            "include-collaborators"?: Parameters.IncludeCollaborators;
            "include-direct-children"?: Parameters.IncludeDirectChildren;
        }
        namespace Responses {
            export interface $200 {
                /**
                 * ID of the page.
                 */
                id?: string;
                status?: /* The status of the content. */ Components.Schemas.ContentStatus;
                /**
                 * Title of the page.
                 */
                title?: string;
                /**
                 * ID of the space the page is in.
                 */
                spaceId?: string;
                /**
                 * ID of the parent page, or null if there is no parent page.
                 */
                parentId?: string;
                parentType?: /* Content type of the parent, or null if there is no parent. */ Components.Schemas.ParentContentType;
                /**
                 * Position of child page within the given parent page tree.
                 */
                position?: number | null; // int32
                /**
                 * The account ID of the user who created this page originally.
                 */
                authorId?: string;
                /**
                 * The account ID of the user who owns this page.
                 */
                ownerId?: string | null;
                /**
                 * The account ID of the user who owned this page previously, or null if there is no previous owner.
                 */
                lastOwnerId?: string | null;
                /**
                 * Date and time when the page was created. In format "YYYY-MM-DDTHH:mm:ss.sssZ".
                 */
                createdAt?: string; // date-time
                version?: Components.Schemas.Version;
                body?: /* Contains fields for each representation type requested. */ Components.Schemas.BodySingle;
                labels?: {
                    results?: Components.Schemas.Label[];
                    meta?: Components.Schemas.OptionalFieldMeta;
                    _links?: Components.Schemas.OptionalFieldLinks;
                };
                properties?: {
                    results?: Components.Schemas.ContentProperty[];
                    meta?: Components.Schemas.OptionalFieldMeta;
                    _links?: Components.Schemas.OptionalFieldLinks;
                };
                operations?: {
                    results?: Components.Schemas.Operation[];
                    meta?: Components.Schemas.OptionalFieldMeta;
                    _links?: Components.Schemas.OptionalFieldLinks;
                };
                likes?: {
                    results?: Components.Schemas.Like[];
                    meta?: Components.Schemas.OptionalFieldMeta;
                    _links?: Components.Schemas.OptionalFieldLinks;
                };
                versions?: {
                    results?: Components.Schemas.Version[];
                    meta?: Components.Schemas.OptionalFieldMeta;
                    _links?: Components.Schemas.OptionalFieldLinks;
                };
                /**
                 * Whether the page has been favorited by the current user.
                 */
                isFavoritedByCurrentUser?: boolean;
                _links?: Components.Schemas.AbstractPageLinks;
            }
        }
    }
    namespace GetPageClassificationLevel {
        namespace Parameters {
            export type Id = number; // int64
            export type Status = "current" | "draft" | "archived";
        }
        export interface PathParameters {
            id: Parameters.Id /* int64 */;
        }
        export interface QueryParameters {
            status?: Parameters.Status;
        }
        namespace Responses {
            export type $200 = /**
             * ClassificationLevel
             * A unit of [data classification](https://support.atlassian.com/security-and-access-policies/docs/what-is-data-classification/) defined by an organiation.
             * A classification level may be associated with specific storage and handling requirements or expectations.
             */
            Components.Schemas.ClassificationLevel;
        }
    }
    namespace GetPageContentProperties {
        namespace Parameters {
            export type Cursor = string;
            export type Key = string;
            export type Limit = number; // int32
            export type PageId = number; // int64
            export type Sort = /* The sort fields for content properties. The default sort direction is ascending. To sort in descending order, append a `-` character before the sort field. For example, `fieldName` or `-fieldName`. */ Components.Schemas.ContentPropertySortOrder;
        }
        export interface PathParameters {
            "page-id": Parameters.PageId /* int64 */;
        }
        export interface QueryParameters {
            key?: Parameters.Key;
            sort?: Parameters.Sort;
            cursor?: Parameters.Cursor;
            limit?: Parameters.Limit /* int32 */;
        }
        namespace Responses {
            /**
             * MultiEntityResult<ContentProperty>
             */
            export interface $200 {
                results?: Components.Schemas.ContentProperty[];
                _links?: Components.Schemas.MultiEntityLinks;
            }
        }
    }
    namespace GetPageContentPropertiesById {
        namespace Parameters {
            export type PageId = number; // int64
            export type PropertyId = number; // int64
        }
        export interface PathParameters {
            "page-id": Parameters.PageId /* int64 */;
            "property-id": Parameters.PropertyId /* int64 */;
        }
        namespace Responses {
            export type $200 = Components.Schemas.ContentProperty;
        }
    }
    namespace GetPageDescendants {
        namespace Parameters {
            export type Cursor = string;
            export type Depth = number; // int32
            export type Id = number; // int64
            export type Limit = number; // int32
        }
        export interface PathParameters {
            id: Parameters.Id /* int64 */;
        }
        export interface QueryParameters {
            limit?: Parameters.Limit /* int32 */;
            depth?: Parameters.Depth /* int32 */;
            cursor?: Parameters.Cursor;
        }
        namespace Responses {
            /**
             * MultiEntityResult<DescendantsResponse>
             */
            export interface $200 {
                results?: Components.Schemas.DescendantsResponse[];
                _links?: Components.Schemas.MultiEntityLinks;
            }
        }
    }
    namespace GetPageDirectChildren {
        namespace Parameters {
            export type Cursor = string;
            export type Id = number; // int64
            export type Limit = number; // int32
            export type Sort = string;
        }
        export interface PathParameters {
            id: Parameters.Id /* int64 */;
        }
        export interface QueryParameters {
            cursor?: Parameters.Cursor;
            limit?: Parameters.Limit /* int32 */;
            sort?: Parameters.Sort;
        }
        namespace Responses {
            /**
             * MultiEntityResult<ChildrenResponse>
             */
            export interface $200 {
                results?: Components.Schemas.ChildrenResponse[];
                _links?: Components.Schemas.MultiEntityLinks;
            }
        }
    }
    namespace GetPageFooterComments {
        namespace Parameters {
            export type BodyFormat = /* The primary formats a body can be represented as. A subset of BodyRepresentation. These formats are the only allowed formats in certain use cases. */ Components.Schemas.PrimaryBodyRepresentation;
            export type Cursor = string;
            export type Id = number; // int64
            export type Limit = number; // int32
            export type Sort = /* The sort fields for comments. The default sort direction is ascending. To sort in descending order, append a `-` character before the sort field. For example, `fieldName` or `-fieldName`. */ Components.Schemas.CommentSortOrder;
            export type Status = ("current" | "archived" | "trashed" | "deleted" | "historical" | "draft")[];
        }
        export interface PathParameters {
            id: Parameters.Id /* int64 */;
        }
        export interface QueryParameters {
            "body-format"?: Parameters.BodyFormat;
            status?: Parameters.Status;
            sort?: Parameters.Sort;
            cursor?: Parameters.Cursor;
            limit?: Parameters.Limit /* int32 */;
        }
        namespace Responses {
            /**
             * MultiEntityResult<PageCommentModel>
             */
            export interface $200 {
                results?: Components.Schemas.PageCommentModel[];
                _links?: Components.Schemas.MultiEntityLinks;
            }
        }
    }
    namespace GetPageInlineComments {
        namespace Parameters {
            export type BodyFormat = /* The primary formats a body can be represented as. A subset of BodyRepresentation. These formats are the only allowed formats in certain use cases. */ Components.Schemas.PrimaryBodyRepresentation;
            export type Cursor = string;
            export type Id = number; // int64
            export type Limit = number; // int32
            export type ResolutionStatus = ("resolved" | "open" | "dangling" | "reopened")[];
            export type Sort = /* The sort fields for comments. The default sort direction is ascending. To sort in descending order, append a `-` character before the sort field. For example, `fieldName` or `-fieldName`. */ Components.Schemas.CommentSortOrder;
            export type Status = ("current" | "archived" | "trashed" | "deleted" | "historical" | "draft")[];
        }
        export interface PathParameters {
            id: Parameters.Id /* int64 */;
        }
        export interface QueryParameters {
            "body-format"?: Parameters.BodyFormat;
            status?: Parameters.Status;
            "resolution-status"?: Parameters.ResolutionStatus;
            sort?: Parameters.Sort;
            cursor?: Parameters.Cursor;
            limit?: Parameters.Limit /* int32 */;
        }
        namespace Responses {
            /**
             * MultiEntityResult<PageInlineCommentModel>
             */
            export interface $200 {
                results?: Components.Schemas.PageInlineCommentModel[];
                _links?: Components.Schemas.MultiEntityLinks;
            }
        }
    }
    namespace GetPageLabels {
        namespace Parameters {
            export type Cursor = string;
            export type Id = number; // int64
            export type Limit = number; // int32
            export type Prefix = "my" | "team" | "global" | "system";
            export type Sort = string;
        }
        export interface PathParameters {
            id: Parameters.Id /* int64 */;
        }
        export interface QueryParameters {
            prefix?: Parameters.Prefix;
            sort?: Parameters.Sort;
            cursor?: Parameters.Cursor;
            limit?: Parameters.Limit /* int32 */;
        }
        namespace Responses {
            /**
             * MultiEntityResult<Label>
             */
            export interface $200 {
                results?: Components.Schemas.Label[];
                _links?: Components.Schemas.MultiEntityLinks;
            }
        }
    }
    namespace GetPageLikeCount {
        namespace Parameters {
            export type Id = number; // int64
        }
        export interface PathParameters {
            id: Parameters.Id /* int64 */;
        }
        namespace Responses {
            /**
             * Integer
             */
            export interface $200 {
                /**
                 * The count number
                 */
                count?: number; // int64
            }
        }
    }
    namespace GetPageLikeUsers {
        namespace Parameters {
            export type Cursor = string;
            export type Id = number; // int64
            export type Limit = number; // int32
        }
        export interface PathParameters {
            id: Parameters.Id /* int64 */;
        }
        export interface QueryParameters {
            cursor?: Parameters.Cursor;
            limit?: Parameters.Limit /* int32 */;
        }
        namespace Responses {
            /**
             * MultiEntityResult<String>
             */
            export interface $200 {
                results?: Components.Schemas.Like[];
                _links?: Components.Schemas.MultiEntityLinks;
            }
        }
    }
    namespace GetPageOperations {
        namespace Parameters {
            export type Id = number; // int64
        }
        export interface PathParameters {
            id: Parameters.Id /* int64 */;
        }
        namespace Responses {
            export type $200 = /* The list of operations permitted on entity. */ Components.Schemas.PermittedOperationsResponse;
        }
    }
    namespace GetPageVersionDetails {
        namespace Parameters {
            export type PageId = number; // int64
            export type VersionNumber = number; // int64
        }
        export interface PathParameters {
            "page-id": Parameters.PageId /* int64 */;
            "version-number": Parameters.VersionNumber /* int64 */;
        }
        namespace Responses {
            export type $200 = Components.Schemas.DetailedVersion;
        }
    }
    namespace GetPageVersions {
        namespace Parameters {
            export type BodyFormat = /* The primary formats a body can be represented as. A subset of BodyRepresentation. These formats are the only allowed formats in certain use cases. */ Components.Schemas.PrimaryBodyRepresentation;
            export type Cursor = string;
            export type Id = number; // int64
            export type Limit = number; // int32
            export type Sort = /* The sort fields for versions. The default sort direction is ascending. To sort in descending order, append a `-` character before the sort field. For example, `fieldName` or `-fieldName`. */ Components.Schemas.VersionSortOrder;
        }
        export interface PathParameters {
            id: Parameters.Id /* int64 */;
        }
        export interface QueryParameters {
            "body-format"?: Parameters.BodyFormat;
            cursor?: Parameters.Cursor;
            limit?: Parameters.Limit /* int32 */;
            sort?: Parameters.Sort;
        }
        namespace Responses {
            /**
             * MultiEntityResult<Version>
             */
            export interface $200 {
                results?: Components.Schemas.PageVersion[];
                _links?: Components.Schemas.MultiEntityLinks;
            }
        }
    }
    namespace GetPages {
        namespace Parameters {
            export type BodyFormat = /* The primary formats a body can be represented as. A subset of BodyRepresentation. These formats are the only allowed formats in certain use cases. */ Components.Schemas.PrimaryBodyRepresentation;
            export type Cursor = string;
            export type Id = [
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?
            ];
            export type Limit = number; // int32
            export type Sort = /* The sort fields for pages. The default sort direction is ascending. To sort in descending order, append a `-` character before the sort field. For example, `fieldName` or `-fieldName`. */ Components.Schemas.PageSortOrder;
            export type SpaceId = [
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?
            ];
            export type Status = ("current" | "archived" | "deleted" | "trashed")[];
            export type Subtype = "live" | "page";
            export type Title = string;
        }
        export interface QueryParameters {
            id?: Parameters.Id;
            "space-id"?: Parameters.SpaceId;
            sort?: Parameters.Sort;
            status?: Parameters.Status;
            title?: Parameters.Title;
            "body-format"?: Parameters.BodyFormat;
            subtype?: Parameters.Subtype;
            cursor?: Parameters.Cursor;
            limit?: Parameters.Limit /* int32 */;
        }
        namespace Responses {
            /**
             * MultiEntityResult<Page>
             */
            export interface $200 {
                results?: Components.Schemas.PageBulk[];
                _links?: Components.Schemas.MultiEntityLinks;
            }
        }
    }
    namespace GetPagesInSpace {
        namespace Parameters {
            export type BodyFormat = /* The primary formats a body can be represented as. A subset of BodyRepresentation. These formats are the only allowed formats in certain use cases. */ Components.Schemas.PrimaryBodyRepresentation;
            export type Cursor = string;
            export type Depth = "all" | "root";
            export type Id = number; // int64
            export type Limit = number; // int32
            export type Sort = /* The sort fields for pages. The default sort direction is ascending. To sort in descending order, append a `-` character before the sort field. For example, `fieldName` or `-fieldName`. */ Components.Schemas.PageSortOrder;
            export type Status = ("current" | "archived" | "deleted" | "trashed")[];
            export type Title = string;
        }
        export interface PathParameters {
            id: Parameters.Id /* int64 */;
        }
        export interface QueryParameters {
            depth?: Parameters.Depth;
            sort?: Parameters.Sort;
            status?: Parameters.Status;
            title?: Parameters.Title;
            "body-format"?: Parameters.BodyFormat;
            cursor?: Parameters.Cursor;
            limit?: Parameters.Limit /* int32 */;
        }
        namespace Responses {
            /**
             * MultiEntityResult<Page>
             */
            export interface $200 {
                results?: Components.Schemas.PageBulk[];
                _links?: Components.Schemas.MultiEntityLinks;
            }
        }
    }
    namespace GetSmartLinkAncestors {
        namespace Parameters {
            export type Id = number; // int64
            export type Limit = number; // int32
        }
        export interface PathParameters {
            id: Parameters.Id /* int64 */;
        }
        export interface QueryParameters {
            limit?: Parameters.Limit /* int32 */;
        }
        namespace Responses {
            /**
             * MultiEntityResult<Ancestor>
             */
            export interface $200 {
                results?: Components.Schemas.Ancestor[];
            }
            export interface $404 {
            }
        }
    }
    namespace GetSmartLinkById {
        namespace Parameters {
            export type Id = number; // int64
            export type IncludeCollaborators = boolean;
            export type IncludeDirectChildren = boolean;
            export type IncludeOperations = boolean;
            export type IncludeProperties = boolean;
        }
        export interface PathParameters {
            id: Parameters.Id /* int64 */;
        }
        export interface QueryParameters {
            "include-collaborators"?: Parameters.IncludeCollaborators;
            "include-direct-children"?: Parameters.IncludeDirectChildren;
            "include-operations"?: Parameters.IncludeOperations;
            "include-properties"?: Parameters.IncludeProperties;
        }
        namespace Responses {
            export interface $200 {
                /**
                 * ID of the Smart Link in the content tree.
                 */
                id?: string;
                /**
                 * The content type of the object.
                 */
                type?: string;
                status?: /* The status of the content. */ Components.Schemas.ContentStatus;
                /**
                 * Title of the Smart Link in the content tree.
                 */
                title?: string;
                /**
                 * ID of the parent content, or null if there is no parent content.
                 */
                parentId?: string;
                parentType?: /* Content type of the parent, or null if there is no parent. */ Components.Schemas.ParentContentType;
                /**
                 * Position of the Smart Link within the given parent page tree.
                 */
                position?: number | null; // int32
                /**
                 * The account ID of the user who created this Smart Link in the content tree originally.
                 */
                authorId?: string;
                /**
                 * The account ID of the user who owns this Smart Link in the content tree.
                 */
                ownerId?: string;
                /**
                 * Date and time when the Smart Link in the content tree was created. In format "YYYY-MM-DDTHH:mm:ss.sssZ".
                 */
                createdAt?: string; // date-time
                /**
                 * The embedded URL of the Smart Link. If the Smart Link does not have an embedded URL, this property will not be included in the response.
                 */
                embedUrl?: string;
                /**
                 * ID of the space the Smart Link is in.
                 */
                spaceId?: string;
                version?: Components.Schemas.Version;
                _links?: Components.Schemas.SmartLinkLinks;
            }
        }
    }
    namespace GetSmartLinkContentProperties {
        namespace Parameters {
            export type Cursor = string;
            export type Id = number; // int64
            export type Key = string;
            export type Limit = number; // int32
            export type Sort = /* The sort fields for content properties. The default sort direction is ascending. To sort in descending order, append a `-` character before the sort field. For example, `fieldName` or `-fieldName`. */ Components.Schemas.ContentPropertySortOrder;
        }
        export interface PathParameters {
            id: Parameters.Id /* int64 */;
        }
        export interface QueryParameters {
            key?: Parameters.Key;
            sort?: Parameters.Sort;
            cursor?: Parameters.Cursor;
            limit?: Parameters.Limit /* int32 */;
        }
        namespace Responses {
            /**
             * MultiEntityResult<ContentProperty>
             */
            export interface $200 {
                results?: Components.Schemas.ContentProperty[];
                _links?: Components.Schemas.MultiEntityLinks;
            }
        }
    }
    namespace GetSmartLinkContentPropertiesById {
        namespace Parameters {
            export type EmbedId = number; // int64
            export type PropertyId = number; // int64
        }
        export interface PathParameters {
            "embed-id": Parameters.EmbedId /* int64 */;
            "property-id": Parameters.PropertyId /* int64 */;
        }
        namespace Responses {
            export type $200 = Components.Schemas.ContentProperty;
        }
    }
    namespace GetSmartLinkDescendants {
        namespace Parameters {
            export type Cursor = string;
            export type Depth = number; // int32
            export type Id = number; // int64
            export type Limit = number; // int32
        }
        export interface PathParameters {
            id: Parameters.Id /* int64 */;
        }
        export interface QueryParameters {
            limit?: Parameters.Limit /* int32 */;
            depth?: Parameters.Depth /* int32 */;
            cursor?: Parameters.Cursor;
        }
        namespace Responses {
            /**
             * MultiEntityResult<DescendantsResponse>
             */
            export interface $200 {
                results?: Components.Schemas.DescendantsResponse[];
                _links?: Components.Schemas.MultiEntityLinks;
            }
        }
    }
    namespace GetSmartLinkDirectChildren {
        namespace Parameters {
            export type Cursor = string;
            export type Id = number; // int64
            export type Limit = number; // int32
            export type Sort = string;
        }
        export interface PathParameters {
            id: Parameters.Id /* int64 */;
        }
        export interface QueryParameters {
            cursor?: Parameters.Cursor;
            limit?: Parameters.Limit /* int32 */;
            sort?: Parameters.Sort;
        }
        namespace Responses {
            /**
             * MultiEntityResult<ChildrenResponse>
             */
            export interface $200 {
                results?: Components.Schemas.ChildrenResponse[];
                _links?: Components.Schemas.MultiEntityLinks;
            }
        }
    }
    namespace GetSmartLinkOperations {
        namespace Parameters {
            export type Id = number; // int64
        }
        export interface PathParameters {
            id: Parameters.Id /* int64 */;
        }
        namespace Responses {
            export type $200 = /* The list of operations permitted on entity. */ Components.Schemas.PermittedOperationsResponse;
        }
    }
    namespace GetSpaceById {
        namespace Parameters {
            export type DescriptionFormat = /* The formats a space description can be represented as. A subset of BodyRepresentation. */ Components.Schemas.SpaceDescriptionBodyRepresentation;
            export type Id = number; // int64
            export type IncludeIcon = boolean;
            export type IncludeLabels = boolean;
            export type IncludeOperations = boolean;
            export type IncludePermissions = boolean;
            export type IncludeProperties = boolean;
            export type IncludeRoleAssignments = boolean;
        }
        export interface PathParameters {
            id: Parameters.Id /* int64 */;
        }
        export interface QueryParameters {
            "description-format"?: Parameters.DescriptionFormat;
            "include-icon"?: Parameters.IncludeIcon;
            "include-operations"?: Parameters.IncludeOperations;
            "include-properties"?: Parameters.IncludeProperties;
            "include-permissions"?: Parameters.IncludePermissions;
            "include-role-assignments"?: Parameters.IncludeRoleAssignments;
            "include-labels"?: Parameters.IncludeLabels;
        }
        namespace Responses {
            export interface $200 {
                /**
                 * ID of the space.
                 */
                id?: string;
                /**
                 * Key of the space.
                 */
                key?: string;
                /**
                 * Name of the space.
                 */
                name?: string;
                type?: /* The type of space. */ Components.Schemas.SpaceType;
                status?: /* The status of the space. */ Components.Schemas.SpaceStatus;
                /**
                 * The account ID of the user who created this space originally.
                 */
                authorId?: string;
                /**
                 * Date and time when the space was created. In format "YYYY-MM-DDTHH:mm:ss.sssZ".
                 */
                createdAt?: string; // date-time
                /**
                 * ID of the space's homepage.
                 */
                homepageId?: string;
                description?: /* Contains fields for each representation type requested. */ Components.Schemas.SpaceDescription;
                icon?: /* The icon of the space */ Components.Schemas.SpaceIcon;
                labels?: {
                    results?: Components.Schemas.Label[];
                    meta?: Components.Schemas.OptionalFieldMeta;
                    _links?: Components.Schemas.OptionalFieldLinks;
                };
                properties?: {
                    results?: Components.Schemas.SpaceProperty[];
                    meta?: Components.Schemas.OptionalFieldMeta;
                    _links?: Components.Schemas.OptionalFieldLinks;
                };
                operations?: {
                    results?: Components.Schemas.Operation[];
                    meta?: Components.Schemas.OptionalFieldMeta;
                    _links?: Components.Schemas.OptionalFieldLinks;
                };
                permissions?: {
                    results?: Components.Schemas.SpacePermissionAssignment[];
                    meta?: Components.Schemas.OptionalFieldMeta;
                    _links?: Components.Schemas.OptionalFieldLinks;
                };
                _links?: Components.Schemas.SpaceLinks;
            }
        }
    }
    namespace GetSpaceContentLabels {
        namespace Parameters {
            export type Cursor = string;
            export type Id = number; // int64
            export type Limit = number; // int32
            export type Prefix = "my" | "team";
            export type Sort = string;
        }
        export interface PathParameters {
            id: Parameters.Id /* int64 */;
        }
        export interface QueryParameters {
            prefix?: Parameters.Prefix;
            sort?: Parameters.Sort;
            cursor?: Parameters.Cursor;
            limit?: Parameters.Limit /* int32 */;
        }
        namespace Responses {
            /**
             * MultiEntityResult<Label>
             */
            export interface $200 {
                results?: Components.Schemas.Label[];
                _links?: Components.Schemas.MultiEntityLinks;
            }
        }
    }
    namespace GetSpaceDefaultClassificationLevel {
        namespace Parameters {
            export type Id = number; // int64
        }
        export interface PathParameters {
            id: Parameters.Id /* int64 */;
        }
        namespace Responses {
            export type $200 = /**
             * ClassificationLevel
             * A unit of [data classification](https://support.atlassian.com/security-and-access-policies/docs/what-is-data-classification/) defined by an organiation.
             * A classification level may be associated with specific storage and handling requirements or expectations.
             */
            Components.Schemas.ClassificationLevel;
        }
    }
    namespace GetSpaceLabels {
        namespace Parameters {
            export type Cursor = string;
            export type Id = number; // int64
            export type Limit = number; // int32
            export type Prefix = "my" | "team";
            export type Sort = string;
        }
        export interface PathParameters {
            id: Parameters.Id /* int64 */;
        }
        export interface QueryParameters {
            prefix?: Parameters.Prefix;
            sort?: Parameters.Sort;
            cursor?: Parameters.Cursor;
            limit?: Parameters.Limit /* int32 */;
        }
        namespace Responses {
            /**
             * MultiEntityResult<Label>
             */
            export interface $200 {
                results?: Components.Schemas.Label[];
                _links?: Components.Schemas.MultiEntityLinks;
            }
        }
    }
    namespace GetSpaceOperations {
        namespace Parameters {
            export type Id = number; // int64
        }
        export interface PathParameters {
            id: Parameters.Id /* int64 */;
        }
        namespace Responses {
            export type $200 = /* The list of operations permitted on entity. */ Components.Schemas.PermittedOperationsResponse;
        }
    }
    namespace GetSpacePermissionsAssignments {
        namespace Parameters {
            export type Cursor = string;
            export type Id = number; // int64
            export type Limit = number; // int32
        }
        export interface PathParameters {
            id: Parameters.Id /* int64 */;
        }
        export interface QueryParameters {
            cursor?: Parameters.Cursor;
            limit?: Parameters.Limit /* int32 */;
        }
        namespace Responses {
            /**
             * MultiEntityResult<SpacePermissionAssignment>
             */
            export interface $200 {
                results?: Components.Schemas.SpacePermissionAssignment[];
                _links?: Components.Schemas.MultiEntityLinks;
            }
        }
    }
    namespace GetSpaceProperties {
        namespace Parameters {
            export type Cursor = string;
            export type Key = string;
            export type Limit = number; // int32
            export type SpaceId = number; // int64
        }
        export interface PathParameters {
            "space-id": Parameters.SpaceId /* int64 */;
        }
        export interface QueryParameters {
            key?: Parameters.Key;
            cursor?: Parameters.Cursor;
            limit?: Parameters.Limit /* int32 */;
        }
        namespace Responses {
            /**
             * MultiEntityResult<SpaceProperty>
             */
            export interface $200 {
                results?: Components.Schemas.SpaceProperty[];
                _links?: Components.Schemas.MultiEntityLinks;
            }
        }
    }
    namespace GetSpacePropertyById {
        namespace Parameters {
            export type PropertyId = number; // int64
            export type SpaceId = number; // int64
        }
        export interface PathParameters {
            "space-id": Parameters.SpaceId /* int64 */;
            "property-id": Parameters.PropertyId /* int64 */;
        }
        namespace Responses {
            export type $200 = Components.Schemas.SpaceProperty;
        }
    }
    namespace GetSpaceRoleAssignments {
        namespace Parameters {
            export type Cursor = string;
            export type Id = number;
            export type Limit = number; // int32
            export type PrincipalId = string;
            export type PrincipalType = /* The principal type. */ Components.Schemas.PrincipalType;
            export type RoleId = string;
            export type RoleType = string;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        export interface QueryParameters {
            "role-id"?: Parameters.RoleId;
            "role-type"?: Parameters.RoleType;
            "principal-id"?: Parameters.PrincipalId;
            "principal-type"?: Parameters.PrincipalType;
            cursor?: Parameters.Cursor;
            limit?: Parameters.Limit /* int32 */;
        }
        namespace Responses {
            /**
             * MultiEntityResult<SpaceRoleAssignment>
             */
            export interface $200 {
                results?: Components.Schemas.SpaceRoleAssignment[];
                _links?: Components.Schemas.MultiEntityLinks;
            }
        }
    }
    namespace GetSpaceRoleMode {
        namespace Responses {
            export interface $200 {
                /**
                 * The space role mode.
                 */
                mode?: "PRE_ROLES" | "ROLES_TRANSITION" | "ROLES";
            }
        }
    }
    namespace GetSpaceRolesById {
        namespace Parameters {
            export type Id = number;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        namespace Responses {
            export interface $200 {
                /**
                 * The identifier for the space role.
                 */
                id?: string;
                type?: /* The role type. */ Components.Schemas.RoleType;
                /**
                 * The name for the space role.
                 */
                name?: string;
                /**
                 * The description for the space role’s usage.
                 */
                description?: string;
                /**
                 * The space permissions the space role is comprised of.
                 */
                spacePermissions?: string[];
                _links?: {
                    /**
                     * Base url of the Confluence site.
                     */
                    base?: string;
                };
            }
        }
    }
    namespace GetSpaces {
        namespace Parameters {
            export type Cursor = string;
            export type DescriptionFormat = /* The formats a space description can be represented as. A subset of BodyRepresentation. */ Components.Schemas.SpaceDescriptionBodyRepresentation;
            export type FavoritedBy = string;
            export type Ids = [
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?
            ];
            export type IncludeIcon = boolean;
            export type Keys = [
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?
            ];
            export type Labels = string[];
            export type Limit = number; // int32
            export type NotFavoritedBy = string;
            export type Sort = /* The sort fields for spaces. The default sort direction is ascending. To sort in descending order, append a `-` character before the sort field. For example, `fieldName` or `-fieldName`. */ Components.Schemas.SpaceSortOrder;
            export type Status = "current" | "archived";
            export type Type = "global" | "collaboration" | "knowledge_base" | "personal" | "system" | "onboarding" | "xflow_sample_space";
        }
        export interface QueryParameters {
            ids?: Parameters.Ids;
            keys?: Parameters.Keys;
            type?: Parameters.Type;
            status?: Parameters.Status;
            labels?: Parameters.Labels;
            "favorited-by"?: Parameters.FavoritedBy;
            "not-favorited-by"?: Parameters.NotFavoritedBy;
            sort?: Parameters.Sort;
            "description-format"?: Parameters.DescriptionFormat;
            "include-icon"?: Parameters.IncludeIcon;
            cursor?: Parameters.Cursor;
            limit?: Parameters.Limit /* int32 */;
        }
        namespace Responses {
            /**
             * MultiEntityResult<Space>
             */
            export interface $200 {
                results?: Components.Schemas.SpaceBulk[];
                _links?: Components.Schemas.MultiEntityLinks;
            }
        }
    }
    namespace GetTaskById {
        namespace Parameters {
            export type BodyFormat = /* The primary formats a body can be represented as. A subset of BodyRepresentation. These formats are the only allowed formats in certain use cases. */ Components.Schemas.PrimaryBodyRepresentation;
            export type Id = number; // int64
        }
        export interface PathParameters {
            id: Parameters.Id /* int64 */;
        }
        export interface QueryParameters {
            "body-format"?: Parameters.BodyFormat;
        }
        namespace Responses {
            export type $200 = Components.Schemas.Task;
        }
    }
    namespace GetTasks {
        namespace Parameters {
            export type AssignedTo = [
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?
            ];
            export type BlogpostId = [
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?
            ];
            export type BodyFormat = /* The primary formats a body can be represented as. A subset of BodyRepresentation. These formats are the only allowed formats in certain use cases. */ Components.Schemas.PrimaryBodyRepresentation;
            export type CompletedAtFrom = number; // int64
            export type CompletedAtTo = number; // int64
            export type CompletedBy = [
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?
            ];
            export type CreatedAtFrom = number; // int64
            export type CreatedAtTo = number; // int64
            export type CreatedBy = [
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?,
                string?
            ];
            export type Cursor = string;
            export type DueAtFrom = number; // int64
            export type DueAtTo = number; // int64
            export type IncludeBlankTasks = boolean;
            export type Limit = number; // int32
            export type PageId = [
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?
            ];
            export type SpaceId = [
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?
            ];
            export type Status = "complete" | "incomplete";
            export type TaskId = [
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?,
                number?
            ];
        }
        export interface QueryParameters {
            "body-format"?: Parameters.BodyFormat;
            "include-blank-tasks"?: Parameters.IncludeBlankTasks;
            status?: Parameters.Status;
            "task-id"?: Parameters.TaskId;
            "space-id"?: Parameters.SpaceId;
            "page-id"?: Parameters.PageId;
            "blogpost-id"?: Parameters.BlogpostId;
            "created-by"?: Parameters.CreatedBy;
            "assigned-to"?: Parameters.AssignedTo;
            "completed-by"?: Parameters.CompletedBy;
            "created-at-from"?: Parameters.CreatedAtFrom /* int64 */;
            "created-at-to"?: Parameters.CreatedAtTo /* int64 */;
            "due-at-from"?: Parameters.DueAtFrom /* int64 */;
            "due-at-to"?: Parameters.DueAtTo /* int64 */;
            "completed-at-from"?: Parameters.CompletedAtFrom /* int64 */;
            "completed-at-to"?: Parameters.CompletedAtTo /* int64 */;
            cursor?: Parameters.Cursor;
            limit?: Parameters.Limit /* int32 */;
        }
        namespace Responses {
            /**
             * MultiEntityResult<Task>
             */
            export interface $200 {
                results?: Components.Schemas.Task[];
                _links?: Components.Schemas.MultiEntityLinks;
            }
        }
    }
    namespace GetWhiteboardAncestors {
        namespace Parameters {
            export type Id = number; // int64
            export type Limit = number; // int32
        }
        export interface PathParameters {
            id: Parameters.Id /* int64 */;
        }
        export interface QueryParameters {
            limit?: Parameters.Limit /* int32 */;
        }
        namespace Responses {
            /**
             * MultiEntityResult<Ancestor>
             */
            export interface $200 {
                results?: Components.Schemas.Ancestor[];
            }
            export interface $404 {
            }
        }
    }
    namespace GetWhiteboardById {
        namespace Parameters {
            export type Id = number; // int64
            export type IncludeCollaborators = boolean;
            export type IncludeDirectChildren = boolean;
            export type IncludeOperations = boolean;
            export type IncludeProperties = boolean;
        }
        export interface PathParameters {
            id: Parameters.Id /* int64 */;
        }
        export interface QueryParameters {
            "include-collaborators"?: Parameters.IncludeCollaborators;
            "include-direct-children"?: Parameters.IncludeDirectChildren;
            "include-operations"?: Parameters.IncludeOperations;
            "include-properties"?: Parameters.IncludeProperties;
        }
        namespace Responses {
            export interface $200 {
                /**
                 * ID of the whiteboard.
                 */
                id?: string;
                /**
                 * The content type of the object.
                 */
                type?: string;
                status?: /* The status of the content. */ Components.Schemas.ContentStatus;
                /**
                 * Title of the whiteboard.
                 */
                title?: string;
                /**
                 * ID of the parent content, or null if there is no parent content.
                 */
                parentId?: string;
                parentType?: /* Content type of the parent, or null if there is no parent. */ Components.Schemas.ParentContentType;
                /**
                 * Position of the whiteboard within the given parent page tree.
                 */
                position?: number | null; // int32
                /**
                 * The account ID of the user who created this whiteboard originally.
                 */
                authorId?: string;
                /**
                 * The account ID of the user who owns this whiteboard.
                 */
                ownerId?: string;
                /**
                 * Date and time when the whiteboard was created. In format "YYYY-MM-DDTHH:mm:ss.sssZ".
                 */
                createdAt?: string; // date-time
                /**
                 * ID of the space the whiteboard is in.
                 */
                spaceId?: string;
                version?: Components.Schemas.Version;
                _links?: Components.Schemas.WhiteboardLinks;
            }
        }
    }
    namespace GetWhiteboardClassificationLevel {
        namespace Parameters {
            export type Id = number; // int64
        }
        export interface PathParameters {
            id: Parameters.Id /* int64 */;
        }
        namespace Responses {
            export type $200 = /**
             * ClassificationLevel
             * A unit of [data classification](https://support.atlassian.com/security-and-access-policies/docs/what-is-data-classification/) defined by an organiation.
             * A classification level may be associated with specific storage and handling requirements or expectations.
             */
            Components.Schemas.ClassificationLevel;
        }
    }
    namespace GetWhiteboardContentProperties {
        namespace Parameters {
            export type Cursor = string;
            export type Id = number; // int64
            export type Key = string;
            export type Limit = number; // int32
            export type Sort = /* The sort fields for content properties. The default sort direction is ascending. To sort in descending order, append a `-` character before the sort field. For example, `fieldName` or `-fieldName`. */ Components.Schemas.ContentPropertySortOrder;
        }
        export interface PathParameters {
            id: Parameters.Id /* int64 */;
        }
        export interface QueryParameters {
            key?: Parameters.Key;
            sort?: Parameters.Sort;
            cursor?: Parameters.Cursor;
            limit?: Parameters.Limit /* int32 */;
        }
        namespace Responses {
            /**
             * MultiEntityResult<ContentProperty>
             */
            export interface $200 {
                results?: Components.Schemas.ContentProperty[];
                _links?: Components.Schemas.MultiEntityLinks;
            }
        }
    }
    namespace GetWhiteboardContentPropertiesById {
        namespace Parameters {
            export type PropertyId = number; // int64
            export type WhiteboardId = number; // int64
        }
        export interface PathParameters {
            "whiteboard-id": Parameters.WhiteboardId /* int64 */;
            "property-id": Parameters.PropertyId /* int64 */;
        }
        namespace Responses {
            export type $200 = Components.Schemas.ContentProperty;
        }
    }
    namespace GetWhiteboardDescendants {
        namespace Parameters {
            export type Cursor = string;
            export type Depth = number; // int32
            export type Id = number; // int64
            export type Limit = number; // int32
        }
        export interface PathParameters {
            id: Parameters.Id /* int64 */;
        }
        export interface QueryParameters {
            limit?: Parameters.Limit /* int32 */;
            depth?: Parameters.Depth /* int32 */;
            cursor?: Parameters.Cursor;
        }
        namespace Responses {
            /**
             * MultiEntityResult<DescendantsResponse>
             */
            export interface $200 {
                results?: Components.Schemas.DescendantsResponse[];
                _links?: Components.Schemas.MultiEntityLinks;
            }
            export interface $404 {
            }
        }
    }
    namespace GetWhiteboardDirectChildren {
        namespace Parameters {
            export type Cursor = string;
            export type Id = number; // int64
            export type Limit = number; // int32
            export type Sort = string;
        }
        export interface PathParameters {
            id: Parameters.Id /* int64 */;
        }
        export interface QueryParameters {
            cursor?: Parameters.Cursor;
            limit?: Parameters.Limit /* int32 */;
            sort?: Parameters.Sort;
        }
        namespace Responses {
            /**
             * MultiEntityResult<ChildrenResponse>
             */
            export interface $200 {
                results?: Components.Schemas.ChildrenResponse[];
                _links?: Components.Schemas.MultiEntityLinks;
            }
        }
    }
    namespace GetWhiteboardOperations {
        namespace Parameters {
            export type Id = number; // int64
        }
        export interface PathParameters {
            id: Parameters.Id /* int64 */;
        }
        namespace Responses {
            export type $200 = /* The list of operations permitted on entity. */ Components.Schemas.PermittedOperationsResponse;
        }
    }
    namespace InviteByEmail {
        export type RequestBody = Components.RequestBodies.CheckAccessOrInviteByEmailRequest;
        namespace Responses {
            export interface $404 {
            }
            export interface $503 {
            }
        }
    }
    namespace PostBlogPostClassificationLevel {
        namespace Parameters {
            export type Id = number; // int64
        }
        export interface PathParameters {
            id: Parameters.Id /* int64 */;
        }
        export type RequestBody = Components.RequestBodies.ContentClassificationLevelDeleteRequest;
        namespace Responses {
            export interface $204 {
            }
            export interface $404 {
            }
        }
    }
    namespace PostDatabaseClassificationLevel {
        namespace Parameters {
            export type Id = number; // int64
        }
        export interface PathParameters {
            id: Parameters.Id /* int64 */;
        }
        export type RequestBody = Components.RequestBodies.LiveEditContentClassificationLevelResetRequest;
        namespace Responses {
            export interface $204 {
            }
            export interface $404 {
            }
        }
    }
    namespace PostPageClassificationLevel {
        namespace Parameters {
            export type Id = number; // int64
        }
        export interface PathParameters {
            id: Parameters.Id /* int64 */;
        }
        export type RequestBody = Components.RequestBodies.ContentClassificationLevelDeleteRequest;
        namespace Responses {
            export interface $204 {
            }
            export interface $404 {
            }
        }
    }
    namespace PostRedactBlog {
        namespace Parameters {
            export type Id = number; // int64
        }
        export interface PathParameters {
            id: Parameters.Id /* int64 */;
        }
        export type RequestBody = Components.RequestBodies.RedactionRequest;
        namespace Responses {
            export type $202 = /**
             * Response containing details of all redactions that were applied to the content.
             * Each redaction includes a unique ID for restoration, except that code block redactions cannot be restored.
             *
             */
            Components.Schemas.RedactionResponse;
            export interface $400 {
            }
        }
    }
    namespace PostRedactPage {
        namespace Parameters {
            export type Id = number; // int64
        }
        export interface PathParameters {
            id: Parameters.Id /* int64 */;
        }
        export type RequestBody = Components.RequestBodies.RedactionRequest;
        namespace Responses {
            export type $202 = /**
             * Response containing details of all redactions that were applied to the content.
             * Each redaction includes a unique ID for restoration, except that code block redactions cannot be restored.
             *
             */
            Components.Schemas.RedactionResponse;
            export interface $400 {
            }
        }
    }
    namespace PostWhiteboardClassificationLevel {
        namespace Parameters {
            export type Id = number; // int64
        }
        export interface PathParameters {
            id: Parameters.Id /* int64 */;
        }
        export type RequestBody = Components.RequestBodies.LiveEditContentClassificationLevelResetRequest;
        namespace Responses {
            export interface $204 {
            }
            export interface $404 {
            }
        }
    }
    namespace PutBlogPostClassificationLevel {
        namespace Parameters {
            export type Id = number; // int64
        }
        export interface PathParameters {
            id: Parameters.Id /* int64 */;
        }
        export type RequestBody = Components.RequestBodies.ContentClassificationLevelUpdateRequest;
        namespace Responses {
            export interface $204 {
            }
        }
    }
    namespace PutDatabaseClassificationLevel {
        namespace Parameters {
            export type Id = number; // int64
        }
        export interface PathParameters {
            id: Parameters.Id /* int64 */;
        }
        export type RequestBody = Components.RequestBodies.LiveEditContentClassificationLevelUpdateRequest;
        namespace Responses {
            export interface $204 {
            }
        }
    }
    namespace PutForgeAppProperty {
        namespace Parameters {
            export type PropertyKey = string;
        }
        export interface PathParameters {
            propertyKey: Parameters.PropertyKey;
        }
        /**
         * example:
         * {
         *   "name": "Forge app",
         *   "darkMode": true,
         *   "version": "1.0.0",
         *   "buildNumber": 7
         * }
         */
        export interface RequestBody {
        }
        namespace Responses {
            export interface $200 {
            }
            export interface $201 {
            }
            export interface $400 {
            }
            export interface $401 {
            }
            export interface $403 {
            }
        }
    }
    namespace PutPageClassificationLevel {
        namespace Parameters {
            export type Id = number; // int64
        }
        export interface PathParameters {
            id: Parameters.Id /* int64 */;
        }
        export type RequestBody = Components.RequestBodies.ContentClassificationLevelUpdateRequest;
        namespace Responses {
            export interface $204 {
            }
        }
    }
    namespace PutSpaceDefaultClassificationLevel {
        namespace Parameters {
            export type Id = number; // int64
        }
        export interface PathParameters {
            id: Parameters.Id /* int64 */;
        }
        export type RequestBody = Components.RequestBodies.SpaceDefaultClassificationLevelUpdateRequest;
    }
    namespace PutWhiteboardClassificationLevel {
        namespace Parameters {
            export type Id = number; // int64
        }
        export interface PathParameters {
            id: Parameters.Id /* int64 */;
        }
        export type RequestBody = Components.RequestBodies.LiveEditContentClassificationLevelUpdateRequest;
        namespace Responses {
            export interface $204 {
            }
        }
    }
    namespace SetSpaceRoleAssignments {
        namespace Parameters {
            export type Id = number;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        export type RequestBody = Components.RequestBodies.SetSpaceRoleAssignmentRequest;
        namespace Responses {
            /**
             * MultiEntityResult<SpaceRoleAssignment>
             */
            export interface $200 {
                results?: Components.Schemas.SpaceRoleAssignment[];
                _links?: Components.Schemas.MultiEntityLinks;
            }
        }
    }
    namespace UpdateAttachmentPropertyById {
        namespace Parameters {
            export type AttachmentId = string; // (att)?[0-9]+
            export type PropertyId = number; // int64
        }
        export interface PathParameters {
            "attachment-id": Parameters.AttachmentId /* (att)?[0-9]+ */;
            "property-id": Parameters.PropertyId /* int64 */;
        }
        export type RequestBody = Components.Schemas.ContentPropertyUpdateRequest;
        namespace Responses {
            export type $200 = Components.Schemas.ContentProperty;
        }
    }
    namespace UpdateBlogPost {
        namespace Parameters {
            export type Id = number; // int64
        }
        export interface PathParameters {
            id: Parameters.Id /* int64 */;
        }
        export type RequestBody = Components.RequestBodies.BlogPostUpdateRequest;
        namespace Responses {
            export interface $200 {
                /**
                 * ID of the blog post.
                 */
                id?: string;
                status?: /* The status of the content. */ Components.Schemas.BlogPostContentStatus;
                /**
                 * Title of the blog post.
                 */
                title?: string;
                /**
                 * ID of the space the blog post is in.
                 */
                spaceId?: string;
                /**
                 * The account ID of the user who created this blog post originally.
                 */
                authorId?: string;
                /**
                 * Date and time when the blog post was created. In format "YYYY-MM-DDTHH:mm:ss.sssZ".
                 */
                createdAt?: string; // date-time
                version?: Components.Schemas.Version;
                body?: /* Contains fields for each representation type requested. */ Components.Schemas.BodySingle;
                labels?: {
                    results?: Components.Schemas.Label[];
                    meta?: Components.Schemas.OptionalFieldMeta;
                    _links?: Components.Schemas.OptionalFieldLinks;
                };
                properties?: {
                    results?: Components.Schemas.ContentProperty[];
                    meta?: Components.Schemas.OptionalFieldMeta;
                    _links?: Components.Schemas.OptionalFieldLinks;
                };
                operations?: {
                    results?: Components.Schemas.Operation[];
                    meta?: Components.Schemas.OptionalFieldMeta;
                    _links?: Components.Schemas.OptionalFieldLinks;
                };
                likes?: {
                    results?: Components.Schemas.Like[];
                    meta?: Components.Schemas.OptionalFieldMeta;
                    _links?: Components.Schemas.OptionalFieldLinks;
                };
                versions?: {
                    results?: Components.Schemas.Version[];
                    meta?: Components.Schemas.OptionalFieldMeta;
                    _links?: Components.Schemas.OptionalFieldLinks;
                };
                /**
                 * Whether the blog post has been favorited by the current user.
                 */
                isFavoritedByCurrentUser?: boolean;
                _links?: Components.Schemas.AbstractPageLinks;
            }
            export interface $404 {
            }
        }
    }
    namespace UpdateBlogpostPropertyById {
        namespace Parameters {
            export type BlogpostId = number; // int64
            export type PropertyId = number; // int64
        }
        export interface PathParameters {
            "blogpost-id": Parameters.BlogpostId /* int64 */;
            "property-id": Parameters.PropertyId /* int64 */;
        }
        export type RequestBody = Components.Schemas.ContentPropertyUpdateRequest;
        namespace Responses {
            export type $200 = Components.Schemas.ContentProperty;
        }
    }
    namespace UpdateCommentPropertyById {
        namespace Parameters {
            export type CommentId = number; // int64
            export type PropertyId = number; // int64
        }
        export interface PathParameters {
            "comment-id": Parameters.CommentId /* int64 */;
            "property-id": Parameters.PropertyId /* int64 */;
        }
        export type RequestBody = Components.Schemas.ContentPropertyUpdateRequest;
        namespace Responses {
            export type $200 = Components.Schemas.ContentProperty;
        }
    }
    namespace UpdateCustomContent {
        namespace Parameters {
            export type Id = number; // int64
        }
        export interface PathParameters {
            id: Parameters.Id /* int64 */;
        }
        export type RequestBody = Components.RequestBodies.CustomContentUpdateRequest;
        namespace Responses {
            export interface $200 {
                /**
                 * ID of the custom content.
                 */
                id?: string;
                /**
                 * The type of custom content.
                 */
                type?: string;
                status?: /* The status of the content. */ Components.Schemas.ContentStatus;
                /**
                 * Title of the custom content.
                 */
                title?: string;
                /**
                 * ID of the space the custom content is in.
                 *
                 * Note: This is always returned, regardless of if the custom content has a container that is a space.
                 */
                spaceId?: string;
                /**
                 * ID of the containing page.
                 *
                 * Note: This is only returned if the custom content has a container that is a page.
                 */
                pageId?: string;
                /**
                 * ID of the containing blog post.
                 *
                 * Note: This is only returned if the custom content has a container that is a blog post.
                 */
                blogPostId?: string;
                /**
                 * ID of the containing custom content.
                 *
                 * Note: This is only returned if the custom content has a container that is custom content.
                 */
                customContentId?: string;
                /**
                 * The account ID of the user who created this custom content originally.
                 */
                authorId?: string;
                /**
                 * Date and time when the custom content was created. In format "YYYY-MM-DDTHH:mm:ss.sssZ".
                 */
                createdAt?: string; // date-time
                version?: Components.Schemas.Version;
                labels?: {
                    results?: Components.Schemas.Label[];
                    meta?: Components.Schemas.OptionalFieldMeta;
                    _links?: Components.Schemas.OptionalFieldLinks;
                };
                properties?: {
                    results?: Components.Schemas.ContentProperty[];
                    meta?: Components.Schemas.OptionalFieldMeta;
                    _links?: Components.Schemas.OptionalFieldLinks;
                };
                operations?: {
                    results?: Components.Schemas.Operation[];
                    meta?: Components.Schemas.OptionalFieldMeta;
                    _links?: Components.Schemas.OptionalFieldLinks;
                };
                versions?: {
                    results?: Components.Schemas.Version[];
                    meta?: Components.Schemas.OptionalFieldMeta;
                    _links?: Components.Schemas.OptionalFieldLinks;
                };
                body?: /* Contains fields for each representation type requested. */ Components.Schemas.CustomContentBodySingle;
                _links?: Components.Schemas.CustomContentLinks;
            }
            export interface $404 {
            }
        }
    }
    namespace UpdateCustomContentPropertyById {
        namespace Parameters {
            export type CustomContentId = number; // int64
            export type PropertyId = number; // int64
        }
        export interface PathParameters {
            "custom-content-id": Parameters.CustomContentId /* int64 */;
            "property-id": Parameters.PropertyId /* int64 */;
        }
        export type RequestBody = Components.Schemas.ContentPropertyUpdateRequest;
        namespace Responses {
            export type $200 = Components.Schemas.ContentProperty;
        }
    }
    namespace UpdateDatabasePropertyById {
        namespace Parameters {
            export type DatabaseId = number; // int64
            export type PropertyId = number; // int64
        }
        export interface PathParameters {
            "database-id": Parameters.DatabaseId /* int64 */;
            "property-id": Parameters.PropertyId /* int64 */;
        }
        export type RequestBody = Components.Schemas.ContentPropertyUpdateRequest;
        namespace Responses {
            export type $200 = Components.Schemas.ContentProperty;
        }
    }
    namespace UpdateFolderPropertyById {
        namespace Parameters {
            export type FolderId = number; // int64
            export type PropertyId = number; // int64
        }
        export interface PathParameters {
            "folder-id": Parameters.FolderId /* int64 */;
            "property-id": Parameters.PropertyId /* int64 */;
        }
        export type RequestBody = Components.Schemas.ContentPropertyUpdateRequest;
        namespace Responses {
            export type $200 = Components.Schemas.ContentProperty;
        }
    }
    namespace UpdateFooterComment {
        namespace Parameters {
            export type CommentId = number; // int64
        }
        export interface PathParameters {
            "comment-id": Parameters.CommentId /* int64 */;
        }
        export interface RequestBody {
            version?: {
                /**
                 * Number of new version. Should be 1 higher than current version of the comment.
                 */
                number?: number;
                /**
                 * Optional message store for the new version.
                 */
                message?: string;
            };
            body?: Components.Schemas.CommentBodyWrite | /**
             * Body of the comment. Only one body format should be specified as the property
             * for this object, e.g. `storage`.
             */
            Components.Schemas.CommentNestedBodyWrite;
            _links?: {
                /**
                 * Base url of the Confluence site.
                 */
                base?: string;
            };
        }
        namespace Responses {
            export type $200 = Components.Schemas.FooterCommentModel;
            export interface $404 {
            }
        }
    }
    namespace UpdateInlineComment {
        namespace Parameters {
            export type CommentId = number; // int64
        }
        export interface PathParameters {
            "comment-id": Parameters.CommentId /* int64 */;
        }
        export type RequestBody = Components.Schemas.UpdateInlineCommentModel;
        namespace Responses {
            export interface $200 {
                /**
                 * ID of the comment.
                 */
                id?: string;
                status?: /* The status of the content. */ Components.Schemas.ContentStatus;
                /**
                 * Title of the comment.
                 */
                title?: string;
                /**
                 * ID of the blog post containing the comment if the comment is on a blog post.
                 */
                blogPostId?: string;
                /**
                 * ID of the page containing the comment if the comment is on a page.
                 */
                pageId?: string;
                /**
                 * ID of the parent comment if the comment is a reply.
                 */
                parentCommentId?: string;
                version?: Components.Schemas.Version;
                body?: /* Contains fields for each representation type requested. */ Components.Schemas.BodySingle;
                /**
                 * Atlassian Account ID of last person who modified the resolve state of the comment. Null until comment is resolved or reopened.
                 */
                resolutionLastModifierId?: string;
                /**
                 * Timestamp of the last modification to the comment's resolution status. Null until comment is resolved or reopened.
                 */
                resolutionLastModifiedAt?: string; // date-time
                resolutionStatus?: /* Inline comment resolution status */ Components.Schemas.InlineCommentResolutionStatus;
                properties?: {
                    results?: Components.Schemas.ContentProperty[];
                    meta?: Components.Schemas.OptionalFieldMeta;
                    _links?: Components.Schemas.OptionalFieldLinks;
                    /**
                     * Property value used to reference the highlighted element in DOM.
                     */
                    inlineMarkerRef?: string;
                    /**
                     * Text that is highlighted.
                     */
                    inlineOriginalSelection?: string;
                };
                operations?: {
                    results?: Components.Schemas.Operation[];
                    meta?: Components.Schemas.OptionalFieldMeta;
                    _links?: Components.Schemas.OptionalFieldLinks;
                };
                likes?: {
                    results?: Components.Schemas.Like[];
                    meta?: Components.Schemas.OptionalFieldMeta;
                    _links?: Components.Schemas.OptionalFieldLinks;
                };
                versions?: {
                    results?: Components.Schemas.Version[];
                    meta?: Components.Schemas.OptionalFieldMeta;
                    _links?: Components.Schemas.OptionalFieldLinks;
                };
                _links?: Components.Schemas.CommentLinks;
            }
        }
    }
    namespace UpdatePage {
        namespace Parameters {
            export type Id = number; // int64
        }
        export interface PathParameters {
            id: Parameters.Id /* int64 */;
        }
        export type RequestBody = Components.RequestBodies.PageUpdateRequest;
        namespace Responses {
            export interface $200 {
                /**
                 * ID of the page.
                 */
                id?: string;
                status?: /* The status of the content. */ Components.Schemas.ContentStatus;
                /**
                 * Title of the page.
                 */
                title?: string;
                /**
                 * ID of the space the page is in.
                 */
                spaceId?: string;
                /**
                 * ID of the parent page, or null if there is no parent page.
                 */
                parentId?: string;
                parentType?: /* Content type of the parent, or null if there is no parent. */ Components.Schemas.ParentContentType;
                /**
                 * Position of child page within the given parent page tree.
                 */
                position?: number | null; // int32
                /**
                 * The account ID of the user who created this page originally.
                 */
                authorId?: string;
                /**
                 * The account ID of the user who owns this page.
                 */
                ownerId?: string | null;
                /**
                 * The account ID of the user who owned this page previously, or null if there is no previous owner.
                 */
                lastOwnerId?: string | null;
                /**
                 * Date and time when the page was created. In format "YYYY-MM-DDTHH:mm:ss.sssZ".
                 */
                createdAt?: string; // date-time
                version?: Components.Schemas.Version;
                body?: /* Contains fields for each representation type requested. */ Components.Schemas.BodySingle;
                labels?: {
                    results?: Components.Schemas.Label[];
                    meta?: Components.Schemas.OptionalFieldMeta;
                    _links?: Components.Schemas.OptionalFieldLinks;
                };
                properties?: {
                    results?: Components.Schemas.ContentProperty[];
                    meta?: Components.Schemas.OptionalFieldMeta;
                    _links?: Components.Schemas.OptionalFieldLinks;
                };
                operations?: {
                    results?: Components.Schemas.Operation[];
                    meta?: Components.Schemas.OptionalFieldMeta;
                    _links?: Components.Schemas.OptionalFieldLinks;
                };
                likes?: {
                    results?: Components.Schemas.Like[];
                    meta?: Components.Schemas.OptionalFieldMeta;
                    _links?: Components.Schemas.OptionalFieldLinks;
                };
                versions?: {
                    results?: Components.Schemas.Version[];
                    meta?: Components.Schemas.OptionalFieldMeta;
                    _links?: Components.Schemas.OptionalFieldLinks;
                };
                /**
                 * Whether the page has been favorited by the current user.
                 */
                isFavoritedByCurrentUser?: boolean;
                _links?: Components.Schemas.AbstractPageLinks;
            }
            export interface $404 {
            }
        }
    }
    namespace UpdatePagePropertyById {
        namespace Parameters {
            export type PageId = number; // int64
            export type PropertyId = number; // int64
        }
        export interface PathParameters {
            "page-id": Parameters.PageId /* int64 */;
            "property-id": Parameters.PropertyId /* int64 */;
        }
        export type RequestBody = Components.Schemas.ContentPropertyUpdateRequest;
        namespace Responses {
            export type $200 = Components.Schemas.ContentProperty;
        }
    }
    namespace UpdatePageTitle {
        namespace Parameters {
            export type Id = number; // int64
        }
        export interface PathParameters {
            id: Parameters.Id /* int64 */;
        }
        export type RequestBody = Components.RequestBodies.PageTitleUpdateRequest;
        namespace Responses {
            export interface $200 {
                /**
                 * ID of the page.
                 */
                id?: string;
                status?: /* The status of the content. */ Components.Schemas.ContentStatus;
                /**
                 * Title of the page.
                 */
                title?: string;
                /**
                 * ID of the space the page is in.
                 */
                spaceId?: string;
                /**
                 * ID of the parent page, or null if there is no parent page.
                 */
                parentId?: string;
                parentType?: /* Content type of the parent, or null if there is no parent. */ Components.Schemas.ParentContentType;
                /**
                 * Position of child page within the given parent page tree.
                 */
                position?: number | null; // int32
                /**
                 * The account ID of the user who created this page originally.
                 */
                authorId?: string;
                /**
                 * The account ID of the user who owns this page.
                 */
                ownerId?: string | null;
                /**
                 * The account ID of the user who owned this page previously, or null if there is no previous owner.
                 */
                lastOwnerId?: string | null;
                /**
                 * Date and time when the page was created. In format "YYYY-MM-DDTHH:mm:ss.sssZ".
                 */
                createdAt?: string; // date-time
                version?: Components.Schemas.Version;
                body?: /* Contains fields for each representation type requested. */ Components.Schemas.BodySingle;
                labels?: {
                    results?: Components.Schemas.Label[];
                    meta?: Components.Schemas.OptionalFieldMeta;
                    _links?: Components.Schemas.OptionalFieldLinks;
                };
                properties?: {
                    results?: Components.Schemas.ContentProperty[];
                    meta?: Components.Schemas.OptionalFieldMeta;
                    _links?: Components.Schemas.OptionalFieldLinks;
                };
                operations?: {
                    results?: Components.Schemas.Operation[];
                    meta?: Components.Schemas.OptionalFieldMeta;
                    _links?: Components.Schemas.OptionalFieldLinks;
                };
                likes?: {
                    results?: Components.Schemas.Like[];
                    meta?: Components.Schemas.OptionalFieldMeta;
                    _links?: Components.Schemas.OptionalFieldLinks;
                };
                versions?: {
                    results?: Components.Schemas.Version[];
                    meta?: Components.Schemas.OptionalFieldMeta;
                    _links?: Components.Schemas.OptionalFieldLinks;
                };
                /**
                 * Whether the page has been favorited by the current user.
                 */
                isFavoritedByCurrentUser?: boolean;
                _links?: Components.Schemas.AbstractPageLinks;
            }
            export interface $404 {
            }
        }
    }
    namespace UpdateSmartLinkPropertyById {
        namespace Parameters {
            export type EmbedId = number; // int64
            export type PropertyId = number; // int64
        }
        export interface PathParameters {
            "embed-id": Parameters.EmbedId /* int64 */;
            "property-id": Parameters.PropertyId /* int64 */;
        }
        export type RequestBody = Components.Schemas.ContentPropertyUpdateRequest;
        namespace Responses {
            export type $200 = Components.Schemas.ContentProperty;
        }
    }
    namespace UpdateSpacePropertyById {
        namespace Parameters {
            export type PropertyId = number; // int64
            export type SpaceId = number; // int64
        }
        export interface PathParameters {
            "space-id": Parameters.SpaceId /* int64 */;
            "property-id": Parameters.PropertyId /* int64 */;
        }
        export type RequestBody = Components.Schemas.SpacePropertyUpdateRequest;
        namespace Responses {
            export type $200 = Components.Schemas.SpaceProperty;
        }
    }
    namespace UpdateSpaceRole {
        namespace Parameters {
            export type Id = string;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        export interface RequestBody {
            /**
             * Name of the space role
             */
            name: string;
            /**
             * Description for the space role
             */
            description: string;
            /**
             * The ids of the space permissions associated with the space role. Sample value "read/space"; retrieve ids from responses returned by [GET /space-permissions](https://developer.atlassian.com/cloud/confluence/rest/v2/api-group-space-permissions/#api-space-permissions-get) endpoint
             */
            spacePermissions: string[];
            /**
             * If space anonymous access is assigned to the role being modified, the Id of a role to migrate those assignments to can be specified. Anonymous access role assignments left unchanged if unspecified.
             */
            anonymousReassignmentRoleId?: string;
            /**
             * If guests are assigned to the role being modified, the Id of a role to migrate those assignments to can be specified. Guest role assignments left unchanged if unspecified.
             */
            guestReassignmentRoleId?: string;
        }
        namespace Responses {
            export type $202 = Components.Schemas.UpdateSpaceRoleResponse;
        }
    }
    namespace UpdateTask {
        namespace Parameters {
            export type BodyFormat = /* The primary formats a body can be represented as. A subset of BodyRepresentation. These formats are the only allowed formats in certain use cases. */ Components.Schemas.PrimaryBodyRepresentation;
            export type Id = number; // int64
        }
        export interface PathParameters {
            id: Parameters.Id /* int64 */;
        }
        export interface QueryParameters {
            "body-format"?: Parameters.BodyFormat;
        }
        export type RequestBody = Components.RequestBodies.TaskUpdateRequest;
        namespace Responses {
            export type $200 = Components.Schemas.Task;
        }
    }
    namespace UpdateWhiteboardPropertyById {
        namespace Parameters {
            export type PropertyId = number; // int64
            export type WhiteboardId = number; // int64
        }
        export interface PathParameters {
            "whiteboard-id": Parameters.WhiteboardId /* int64 */;
            "property-id": Parameters.PropertyId /* int64 */;
        }
        export type RequestBody = Components.Schemas.ContentPropertyUpdateRequest;
        namespace Responses {
            export type $200 = Components.Schemas.ContentProperty;
        }
    }
}


export interface OperationMethods {
  /**
   * getAdminKey - Get Admin Key
   * 
   * Returns information about the admin key if one is currently enabled for the calling user within the site.
   * 
   * **[Permissions](https://support.atlassian.com/user-management/docs/give-users-admin-permissions/#Centralized-user-management-content) required**:
   * User must be an organization or site admin.
   */
  'getAdminKey'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetAdminKey.Responses.$200>
  /**
   * enableAdminKey - Enable Admin Key
   * 
   * Enables admin key access for the calling user within the site. If an admin key already exists for the user, a new one will be issued with an updated expiration time.
   * 
   * **Note:** The `durationInMinutes` field within the request body is optional. If the request body is empty or if the `durationInMinutes` is set to 0 minutes, a new admin key will be issued to the calling user with a default duration of 10 minutes.
   * 
   * **[Permissions](https://support.atlassian.com/user-management/docs/give-users-admin-permissions/#Centralized-user-management-content) required**:
   * User must be an organization or site admin.
   */
  'enableAdminKey'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: Paths.EnableAdminKey.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.EnableAdminKey.Responses.$200>
  /**
   * disableAdminKey - Disable Admin Key
   * 
   * Disables admin key access for the calling user within the site.
   * 
   * **[Permissions](https://support.atlassian.com/user-management/docs/give-users-admin-permissions/#Centralized-user-management-content) required**:
   * User must be an organization or site admin.
   */
  'disableAdminKey'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<any>
  /**
   * getAttachments - Get attachments
   * 
   * Returns all attachments. The number of results is limited by the `limit` parameter and additional results (if available)
   * will be available through the `next` URL present in the `Link` response header.
   * 
   * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
   * Permission to view the container of the attachment.
   */
  'getAttachments'(
    parameters?: Parameters<Paths.GetAttachments.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetAttachments.Responses.$200>
  /**
   * getAttachmentById - Get attachment by id
   * 
   * Returns a specific attachment.
   * 
   * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
   * Permission to view the attachment's container.
   */
  'getAttachmentById'(
    parameters?: Parameters<Paths.GetAttachmentById.QueryParameters & Paths.GetAttachmentById.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetAttachmentById.Responses.$200>
  /**
   * deleteAttachment - Delete attachment
   * 
   * Delete an attachment by id.
   * 
   * Deleting an attachment moves the attachment to the trash, where it can be restored later. To permanently delete an attachment (or "purge" it),
   * the endpoint must be called on a **trashed** attachment with the following param `purge=true`.
   * 
   * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
   * Permission to view the container of the attachment.
   * Permission to delete attachments in the space.
   * Permission to administer the space (if attempting to purge).
   */
  'deleteAttachment'(
    parameters?: Parameters<Paths.DeleteAttachment.QueryParameters & Paths.DeleteAttachment.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<any>
  /**
   * getAttachmentLabels - Get labels for attachment
   * 
   * Returns the labels of specific attachment. The number of results is limited by the `limit` parameter and additional results (if available)
   * will be available through the `next` URL present in the `Link` response header.
   * 
   * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
   * Permission to view the parent content of the attachment and its corresponding space.
   * Only labels that the user has permission to view will be returned.
   */
  'getAttachmentLabels'(
    parameters?: Parameters<Paths.GetAttachmentLabels.QueryParameters & Paths.GetAttachmentLabels.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetAttachmentLabels.Responses.$200>
  /**
   * getAttachmentOperations - Get permitted operations for attachment
   * 
   * Returns the permitted operations on specific attachment.
   * 
   * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
   * Permission to view the parent content of the attachment and its corresponding space.
   */
  'getAttachmentOperations'(
    parameters?: Parameters<Paths.GetAttachmentOperations.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetAttachmentOperations.Responses.$200>
  /**
   * getAttachmentContentProperties - Get content properties for attachment
   * 
   * Retrieves all Content Properties tied to a specified attachment.
   * 
   * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
   * Permission to view the attachment.
   */
  'getAttachmentContentProperties'(
    parameters?: Parameters<Paths.GetAttachmentContentProperties.QueryParameters & Paths.GetAttachmentContentProperties.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetAttachmentContentProperties.Responses.$200>
  /**
   * createAttachmentProperty - Create content property for attachment
   * 
   * Creates a new content property for an attachment.
   * 
   * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
   * Permission to update the attachment.
   */
  'createAttachmentProperty'(
    parameters?: Parameters<Paths.CreateAttachmentProperty.PathParameters> | null,
    data?: Paths.CreateAttachmentProperty.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.CreateAttachmentProperty.Responses.$200>
  /**
   * getAttachmentContentPropertiesById - Get content property for attachment by id
   * 
   * Retrieves a specific Content Property by ID that is attached to a specified attachment.
   * 
   * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
   * Permission to view the attachment.
   */
  'getAttachmentContentPropertiesById'(
    parameters?: Parameters<Paths.GetAttachmentContentPropertiesById.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetAttachmentContentPropertiesById.Responses.$200>
  /**
   * updateAttachmentPropertyById - Update content property for attachment by id
   * 
   * Update a content property for attachment by its id. 
   * 
   * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
   * Permission to edit the attachment.
   */
  'updateAttachmentPropertyById'(
    parameters?: Parameters<Paths.UpdateAttachmentPropertyById.PathParameters> | null,
    data?: Paths.UpdateAttachmentPropertyById.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.UpdateAttachmentPropertyById.Responses.$200>
  /**
   * deleteAttachmentPropertyById - Delete content property for attachment by id
   * 
   * Deletes a content property for an attachment by its id. 
   * 
   * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
   * Permission to attachment the page.
   */
  'deleteAttachmentPropertyById'(
    parameters?: Parameters<Paths.DeleteAttachmentPropertyById.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.DeleteAttachmentPropertyById.Responses.$204>
  /**
   * getAttachmentVersions - Get attachment versions
   * 
   * Returns the versions of specific attachment.
   * 
   * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
   * Permission to view the attachment and its corresponding space.
   */
  'getAttachmentVersions'(
    parameters?: Parameters<Paths.GetAttachmentVersions.QueryParameters & Paths.GetAttachmentVersions.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetAttachmentVersions.Responses.$200>
  /**
   * getAttachmentVersionDetails - Get version details for attachment version
   * 
   * Retrieves version details for the specified attachment and version number.
   * 
   * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
   * Permission to view the attachment.
   */
  'getAttachmentVersionDetails'(
    parameters?: Parameters<Paths.GetAttachmentVersionDetails.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetAttachmentVersionDetails.Responses.$200>
  /**
   * getAttachmentComments - Get attachment comments
   * 
   * Returns the comments of the specific attachment.
   * The number of results is limited by the `limit` parameter and additional results (if available) will be available through
   * the `next` URL present in the `Link` response header.
   * 
   * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
   * Permission to view the attachment and its corresponding containers.
   */
  'getAttachmentComments'(
    parameters?: Parameters<Paths.GetAttachmentComments.QueryParameters & Paths.GetAttachmentComments.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetAttachmentComments.Responses.$200>
  /**
   * getBlogPosts - Get blog posts
   * 
   * Returns all blog posts. The number of results is limited by the `limit` parameter and additional results (if available)
   * will be available through the `next` URL present in the `Link` response header.
   * 
   * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
   * Permission to access the Confluence site ('Can use' global permission).
   * Only blog posts that the user has permission to view will be returned.
   */
  'getBlogPosts'(
    parameters?: Parameters<Paths.GetBlogPosts.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetBlogPosts.Responses.$200>
  /**
   * createBlogPost - Create blog post
   * 
   * Creates a new blog post in the space specified by the spaceId.
   * 
   * By default this will create the blog post as a non-draft, unless the status is specified as draft.
   * If creating a non-draft, the title must not be empty.
   * 
   * Currently only supports the storage representation specified in the body.representation enums below
   */
  'createBlogPost'(
    parameters?: Parameters<Paths.CreateBlogPost.QueryParameters> | null,
    data?: Paths.CreateBlogPost.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.CreateBlogPost.Responses.$200>
  /**
   * getBlogPostById - Get blog post by id
   * 
   * Returns a specific blog post.
   * 
   * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
   * Permission to view the blog post and its corresponding space.
   */
  'getBlogPostById'(
    parameters?: Parameters<Paths.GetBlogPostById.QueryParameters & Paths.GetBlogPostById.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetBlogPostById.Responses.$200>
  /**
   * updateBlogPost - Update blog post
   * 
   * Update a blog post by id.
   * 
   * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
   * Permission to view the blog post and its corresponding space. Permission to update blog posts in the space.
   */
  'updateBlogPost'(
    parameters?: Parameters<Paths.UpdateBlogPost.PathParameters> | null,
    data?: Paths.UpdateBlogPost.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.UpdateBlogPost.Responses.$200>
  /**
   * deleteBlogPost - Delete blog post
   * 
   * Delete a blog post by id.
   * 
   * By default this will delete blog posts that are non-drafts. To delete a blog post that is a draft, the endpoint must be called on a 
   * draft with the following param `draft=true`. Discarded drafts are not sent to the trash and are permanently deleted.
   * 
   * Deleting a blog post that is not a draft moves the blog post to the trash, where it can be restored later.
   * To permanently delete a blog post (or "purge" it), the endpoint must be called on a **trashed** blog post with the following param `purge=true`.
   * 
   * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
   * Permission to view the blog post and its corresponding space.
   * Permission to delete blog posts in the space.
   * Permission to administer the space (if attempting to purge).
   */
  'deleteBlogPost'(
    parameters?: Parameters<Paths.DeleteBlogPost.QueryParameters & Paths.DeleteBlogPost.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<any>
  /**
   * getBlogpostAttachments - Get attachments for blog post
   * 
   * Returns the attachments of specific blog post. The number of results is limited by the `limit` parameter and additional results (if available)
   * will be available through the `next` URL present in the `Link` response header.
   * 
   * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
   * Permission to view the content of the blog post and its corresponding space.
   */
  'getBlogpostAttachments'(
    parameters?: Parameters<Paths.GetBlogpostAttachments.QueryParameters & Paths.GetBlogpostAttachments.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetBlogpostAttachments.Responses.$200>
  /**
   * getCustomContentByTypeInBlogPost - Get custom content by type in blog post
   * 
   * Returns all custom content for a given type within a given blogpost. The number of results is limited by the `limit` parameter and additional results (if available)
   * will be available through the `next` URL present in the `Link` response header.
   * 
   * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
   * Permission to view the custom content, the container of the custom content (blog post), and the corresponding space.
   */
  'getCustomContentByTypeInBlogPost'(
    parameters?: Parameters<Paths.GetCustomContentByTypeInBlogPost.QueryParameters & Paths.GetCustomContentByTypeInBlogPost.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetCustomContentByTypeInBlogPost.Responses.$200>
  /**
   * getBlogPostLabels - Get labels for blog post
   * 
   * Returns the labels of specific blog post. The number of results is limited by the `limit` parameter and additional results (if available)
   * will be available through the `next` URL present in the `Link` response header.
   * 
   * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
   * Permission to view the content of the blog post and its corresponding space.
   * Only labels that the user has permission to view will be returned.
   */
  'getBlogPostLabels'(
    parameters?: Parameters<Paths.GetBlogPostLabels.QueryParameters & Paths.GetBlogPostLabels.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetBlogPostLabels.Responses.$200>
  /**
   * getBlogPostLikeCount - Get like count for blog post
   * 
   * Returns the count of likes of specific blog post.
   * 
   * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
   * Permission to view the content of the blog post and its corresponding space.
   */
  'getBlogPostLikeCount'(
    parameters?: Parameters<Paths.GetBlogPostLikeCount.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetBlogPostLikeCount.Responses.$200>
  /**
   * getBlogPostLikeUsers - Get account IDs of likes for blog post
   * 
   * Returns the account IDs of likes of specific blog post.
   * 
   * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
   * Permission to view the content of the blog post and its corresponding space.
   */
  'getBlogPostLikeUsers'(
    parameters?: Parameters<Paths.GetBlogPostLikeUsers.QueryParameters & Paths.GetBlogPostLikeUsers.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetBlogPostLikeUsers.Responses.$200>
  /**
   * getBlogpostContentProperties - Get content properties for blog post
   * 
   * Retrieves all Content Properties tied to a specified blog post.
   * 
   * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
   * Permission to view the blog post.
   */
  'getBlogpostContentProperties'(
    parameters?: Parameters<Paths.GetBlogpostContentProperties.QueryParameters & Paths.GetBlogpostContentProperties.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetBlogpostContentProperties.Responses.$200>
  /**
   * createBlogpostProperty - Create content property for blog post
   * 
   * Creates a new property for a blogpost.
   * 
   * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
   * Permission to update the blog post.
   */
  'createBlogpostProperty'(
    parameters?: Parameters<Paths.CreateBlogpostProperty.PathParameters> | null,
    data?: Paths.CreateBlogpostProperty.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.CreateBlogpostProperty.Responses.$200>
  /**
   * getBlogpostContentPropertiesById - Get content property for blog post by id
   * 
   * Retrieves a specific Content Property by ID that is attached to a specified blog post.
   * 
   * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
   * Permission to view the blog post.
   */
  'getBlogpostContentPropertiesById'(
    parameters?: Parameters<Paths.GetBlogpostContentPropertiesById.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetBlogpostContentPropertiesById.Responses.$200>
  /**
   * updateBlogpostPropertyById - Update content property for blog post by id
   * 
   * Update a content property for blog post by its id. 
   * 
   * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
   * Permission to edit the blog post.
   */
  'updateBlogpostPropertyById'(
    parameters?: Parameters<Paths.UpdateBlogpostPropertyById.PathParameters> | null,
    data?: Paths.UpdateBlogpostPropertyById.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.UpdateBlogpostPropertyById.Responses.$200>
  /**
   * deleteBlogpostPropertyById - Delete content property for blogpost by id
   * 
   * Deletes a content property for a blogpost by its id. 
   * 
   * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
   * Permission to edit the blog post.
   */
  'deleteBlogpostPropertyById'(
    parameters?: Parameters<Paths.DeleteBlogpostPropertyById.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.DeleteBlogpostPropertyById.Responses.$204>
  /**
   * getBlogPostOperations - Get permitted operations for blog post
   * 
   * Returns the permitted operations on specific blog post.
   * 
   * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
   * Permission to view the parent content of the blog post and its corresponding space.
   */
  'getBlogPostOperations'(
    parameters?: Parameters<Paths.GetBlogPostOperations.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetBlogPostOperations.Responses.$200>
  /**
   * getBlogPostVersions - Get blog post versions
   * 
   * Returns the versions of specific blog post. 
   * 
   * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
   * Permission to view the blog post and its corresponding space.
   */
  'getBlogPostVersions'(
    parameters?: Parameters<Paths.GetBlogPostVersions.QueryParameters & Paths.GetBlogPostVersions.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetBlogPostVersions.Responses.$200>
  /**
   * getBlogPostVersionDetails - Get version details for blog post version
   * 
   * Retrieves version details for the specified blog post and version number.
   * 
   * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
   * Permission to view the blog post.
   */
  'getBlogPostVersionDetails'(
    parameters?: Parameters<Paths.GetBlogPostVersionDetails.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetBlogPostVersionDetails.Responses.$200>
  /**
   * convertContentIdsToContentTypes - Convert content ids to content types
   * 
   * Converts a list of content ids into their associated content types. This is useful for users migrating from v1 to v2
   * who may have stored just content ids without their associated type. This will return types as they should be used in v2.
   * Notably, this will return `inline-comment` for inline comments and `footer-comment` for footer comments, which is distinct from them
   * both being represented by `comment` in v1.
   * 
   * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
   * Permission to view the requested content. Any content that the user does not have permission to view or does not exist will map to `null` in the response.
   */
  'convertContentIdsToContentTypes'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: Paths.ConvertContentIdsToContentTypes.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.ConvertContentIdsToContentTypes.Responses.$200>
  /**
   * getCustomContentByType - Get custom content by type
   * 
   * Returns all custom content for a given type. The number of results is limited by the `limit` parameter and additional results (if available)
   * will be available through the `next` URL present in the `Link` response header.
   * 
   * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
   * Permission to view the custom content, the container of the custom content, and the corresponding space (if different from the container).
   */
  'getCustomContentByType'(
    parameters?: Parameters<Paths.GetCustomContentByType.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetCustomContentByType.Responses.$200>
  /**
   * createCustomContent - Create custom content
   * 
   * Creates a new custom content in the given space, page, blogpost or other custom content.
   * 
   * Only one of `spaceId`, `pageId`, `blogPostId`, or `customContentId` is required in the request body.
   * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
   * Permission to view the content of the page or blogpost and its corresponding space. Permission to create custom content in the space.
   */
  'createCustomContent'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: Paths.CreateCustomContent.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.CreateCustomContent.Responses.$201>
  /**
   * getCustomContentById - Get custom content by id
   * 
   * Returns a specific piece of custom content. 
   * 
   * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
   * Permission to view the custom content, the container of the custom content, and the corresponding space (if different from the container).
   */
  'getCustomContentById'(
    parameters?: Parameters<Paths.GetCustomContentById.QueryParameters & Paths.GetCustomContentById.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetCustomContentById.Responses.$200>
  /**
   * updateCustomContent - Update custom content
   * 
   * Update a custom content by id.
   * At most one of `spaceId`, `pageId`, `blogPostId`, or `customContentId` is allowed in the request body.
   * Note that if `spaceId` is specified, it must be the same as the `spaceId` used for creating the custom content
   * as moving custom content to a different space is not supported.
   * 
   * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
   * Permission to view the content of the page or blogpost and its corresponding space. Permission to update custom content in the space.
   */
  'updateCustomContent'(
    parameters?: Parameters<Paths.UpdateCustomContent.PathParameters> | null,
    data?: Paths.UpdateCustomContent.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.UpdateCustomContent.Responses.$200>
  /**
   * deleteCustomContent - Delete custom content
   * 
   * Delete a custom content by id.
   * 
   * Deleting a custom content will either move it to the trash or permanently delete it (purge it), depending on the apiSupport.
   * To permanently delete a **trashed** custom content, the endpoint must be called with the following param `purge=true`.
   * 
   * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
   * Permission to view the content of the page or blogpost and its corresponding space.
   * Permission to delete custom content in the space.
   * Permission to administer the space (if attempting to purge).
   */
  'deleteCustomContent'(
    parameters?: Parameters<Paths.DeleteCustomContent.QueryParameters & Paths.DeleteCustomContent.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<any>
  /**
   * getCustomContentAttachments - Get attachments for custom content
   * 
   * Returns the attachments of specific custom content. The number of results is limited by the `limit` parameter and additional results (if available)
   * will be available through the `next` URL present in the `Link` response header.
   * 
   * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
   * Permission to view the content of the custom content and its corresponding space.
   */
  'getCustomContentAttachments'(
    parameters?: Parameters<Paths.GetCustomContentAttachments.QueryParameters & Paths.GetCustomContentAttachments.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetCustomContentAttachments.Responses.$200>
  /**
   * getCustomContentComments - Get custom content comments
   * 
   * Returns the comments of the specific custom content.
   * The number of results is limited by the `limit` parameter and additional results (if available) will be available through
   * the `next` URL present in the `Link` response header.
   * 
   * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
   * Permission to view the custom content and its corresponding containers.
   */
  'getCustomContentComments'(
    parameters?: Parameters<Paths.GetCustomContentComments.QueryParameters & Paths.GetCustomContentComments.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetCustomContentComments.Responses.$200>
  /**
   * getCustomContentLabels - Get labels for custom content
   * 
   * Returns the labels for a specific piece of custom content. The number of results is limited by the `limit` parameter and additional results (if available)
   * will be available through the `next` URL present in the `Link` response header.
   * 
   * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
   * Permission to view the custom content and its corresponding space.
   * Only labels that the user has permission to view will be returned.
   */
  'getCustomContentLabels'(
    parameters?: Parameters<Paths.GetCustomContentLabels.QueryParameters & Paths.GetCustomContentLabels.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetCustomContentLabels.Responses.$200>
  /**
   * getCustomContentOperations - Get permitted operations for custom content
   * 
   * Returns the permitted operations on specific custom content.
   * 
   * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
   * Permission to view the parent content of the custom content and its corresponding space.
   */
  'getCustomContentOperations'(
    parameters?: Parameters<Paths.GetCustomContentOperations.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetCustomContentOperations.Responses.$200>
  /**
   * getCustomContentContentProperties - Get content properties for custom content
   * 
   * Retrieves Content Properties tied to a specified custom content.
   * 
   * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
   * Permission to view the custom content.
   */
  'getCustomContentContentProperties'(
    parameters?: Parameters<Paths.GetCustomContentContentProperties.QueryParameters & Paths.GetCustomContentContentProperties.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetCustomContentContentProperties.Responses.$200>
  /**
   * createCustomContentProperty - Create content property for custom content
   * 
   * Creates a new content property for a piece of custom content.
   * 
   * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
   * Permission to update the custom content.
   */
  'createCustomContentProperty'(
    parameters?: Parameters<Paths.CreateCustomContentProperty.PathParameters> | null,
    data?: Paths.CreateCustomContentProperty.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.CreateCustomContentProperty.Responses.$200>
  /**
   * getCustomContentContentPropertiesById - Get content property for custom content by id
   * 
   * Retrieves a specific Content Property by ID that is attached to a specified custom content.
   * 
   * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
   * Permission to view the page.
   */
  'getCustomContentContentPropertiesById'(
    parameters?: Parameters<Paths.GetCustomContentContentPropertiesById.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetCustomContentContentPropertiesById.Responses.$200>
  /**
   * updateCustomContentPropertyById - Update content property for custom content by id
   * 
   * Update a content property for a piece of custom content by its id. 
   * 
   * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
   * Permission to edit the custom content.
   */
  'updateCustomContentPropertyById'(
    parameters?: Parameters<Paths.UpdateCustomContentPropertyById.PathParameters> | null,
    data?: Paths.UpdateCustomContentPropertyById.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.UpdateCustomContentPropertyById.Responses.$200>
  /**
   * deleteCustomContentPropertyById - Delete content property for custom content by id
   * 
   * Deletes a content property for a piece of custom content by its id. 
   * 
   * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
   * Permission to edit the custom content.
   */
  'deleteCustomContentPropertyById'(
    parameters?: Parameters<Paths.DeleteCustomContentPropertyById.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.DeleteCustomContentPropertyById.Responses.$204>
  /**
   * getLabels - Get labels
   * 
   * Returns all labels. The number of results is limited by the `limit` parameter and additional results (if available)
   * will be available through the `next` URL present in the `Link` response header.
   * 
   * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
   * Permission to access the Confluence site ('Can use' global permission).
   * Only labels that the user has permission to view will be returned.
   */
  'getLabels'(
    parameters?: Parameters<Paths.GetLabels.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetLabels.Responses.$200>
  /**
   * getLabelAttachments - Get attachments for label
   * 
   * Returns the attachments of specified label. The number of results is limited by the `limit` parameter and additional results (if available)
   * will be available through the `next` URL present in the `Link` response header.
   * 
   * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
   * Permission to view the attachment and its corresponding space.
   */
  'getLabelAttachments'(
    parameters?: Parameters<Paths.GetLabelAttachments.QueryParameters & Paths.GetLabelAttachments.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetLabelAttachments.Responses.$200>
  /**
   * getLabelBlogPosts - Get blog posts for label
   * 
   * Returns the blogposts of specified label. The number of results is limited by the `limit` parameter and additional results (if available)
   * will be available through the `next` URL present in the `Link` response header.
   * 
   * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
   * Permission to view the content of the page and its corresponding space.
   */
  'getLabelBlogPosts'(
    parameters?: Parameters<Paths.GetLabelBlogPosts.QueryParameters & Paths.GetLabelBlogPosts.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetLabelBlogPosts.Responses.$200>
  /**
   * getLabelPages - Get pages for label
   * 
   * Returns the pages of specified label. The number of results is limited by the `limit` parameter and additional results (if available)
   * will be available through the `next` URL present in the `Link` response header.
   * 
   * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
   * Permission to view the content of the page and its corresponding space.
   */
  'getLabelPages'(
    parameters?: Parameters<Paths.GetLabelPages.QueryParameters & Paths.GetLabelPages.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetLabelPages.Responses.$200>
  /**
   * getPages - Get pages
   * 
   * Returns all pages. The number of results is limited by the `limit` parameter and additional results (if available)
   * will be available through the `next` URL present in the `Link` response header.
   * 
   * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
   * Permission to access the Confluence site ('Can use' global permission).
   * Only pages that the user has permission to view will be returned.
   */
  'getPages'(
    parameters?: Parameters<Paths.GetPages.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetPages.Responses.$200>
  /**
   * createPage - Create page
   * 
   * Creates a page in the space.
   * 
   * Pages are created as published by default unless specified as a draft in the status field. If creating a published page, the title must be specified.
   * 
   * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
   * Permission to view the corresponding space. Permission to create a page in the space.
   */
  'createPage'(
    parameters?: Parameters<Paths.CreatePage.QueryParameters> | null,
    data?: Paths.CreatePage.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.CreatePage.Responses.$200>
  /**
   * getPageById - Get page by id
   * 
   * Returns a specific page.
   * 
   * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
   * Permission to view the page and its corresponding space.
   */
  'getPageById'(
    parameters?: Parameters<Paths.GetPageById.QueryParameters & Paths.GetPageById.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetPageById.Responses.$200>
  /**
   * updatePage - Update page
   * 
   * Update a page by id.
   * 
   * When the "current" version is updated, the provided body content is considered as the latest version. This latest body content
   * will be attempted to be merged into the draft version through a content reconciliation algorithm. If two versions are significantly diverged, 
   * the latest provided content may entirely override what was previously in the draft. 
   * 
   * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
   * Permission to view the page and its corresponding space. Permission to update pages in the space.
   */
  'updatePage'(
    parameters?: Parameters<Paths.UpdatePage.PathParameters> | null,
    data?: Paths.UpdatePage.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.UpdatePage.Responses.$200>
  /**
   * deletePage - Delete page
   * 
   * Delete a page by id.
   * 
   * By default this will delete pages that are non-drafts. To delete a page that is a draft, the endpoint must be called on a 
   * draft with the following param `draft=true`. Discarded drafts are not sent to the trash and are permanently deleted.
   * 
   * Deleting a page moves the page to the trash, where it can be restored later. To permanently delete a page (or "purge" it),
   * the endpoint must be called on a **trashed** page with the following param `purge=true`.
   * 
   * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
   * Permission to view the page and its corresponding space.
   * Permission to delete pages in the space.
   * Permission to administer the space (if attempting to purge).
   */
  'deletePage'(
    parameters?: Parameters<Paths.DeletePage.QueryParameters & Paths.DeletePage.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<any>
  /**
   * getPageAttachments - Get attachments for page
   * 
   * Returns the attachments of specific page. The number of results is limited by the `limit` parameter and additional results (if available)
   * will be available through the `next` URL present in the `Link` response header.
   * 
   * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
   * Permission to view the content of the page and its corresponding space.
   */
  'getPageAttachments'(
    parameters?: Parameters<Paths.GetPageAttachments.QueryParameters & Paths.GetPageAttachments.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetPageAttachments.Responses.$200>
  /**
   * getCustomContentByTypeInPage - Get custom content by type in page
   * 
   * Returns all custom content for a given type within a given page. The number of results is limited by the `limit` parameter and additional results (if available)
   * will be available through the `next` URL present in the `Link` response header.
   * 
   * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
   * Permission to view the custom content, the container of the custom content (page), and the corresponding space.
   */
  'getCustomContentByTypeInPage'(
    parameters?: Parameters<Paths.GetCustomContentByTypeInPage.QueryParameters & Paths.GetCustomContentByTypeInPage.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetCustomContentByTypeInPage.Responses.$200>
  /**
   * getPageLabels - Get labels for page
   * 
   * Returns the labels of specific page. The number of results is limited by the `limit` parameter and additional results (if available)
   * will be available through the `next` URL present in the `Link` response header.
   * 
   * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
   * Permission to view the content of the page and its corresponding space.
   * Only labels that the user has permission to view will be returned.
   */
  'getPageLabels'(
    parameters?: Parameters<Paths.GetPageLabels.QueryParameters & Paths.GetPageLabels.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetPageLabels.Responses.$200>
  /**
   * getPageLikeCount - Get like count for page
   * 
   * Returns the count of likes of specific page.
   * 
   * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
   * Permission to view the content of the page and its corresponding space.
   */
  'getPageLikeCount'(
    parameters?: Parameters<Paths.GetPageLikeCount.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetPageLikeCount.Responses.$200>
  /**
   * getPageLikeUsers - Get account IDs of likes for page
   * 
   * Returns the account IDs of likes of specific page.
   * 
   * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
   * Permission to view the content of the page and its corresponding space.
   */
  'getPageLikeUsers'(
    parameters?: Parameters<Paths.GetPageLikeUsers.QueryParameters & Paths.GetPageLikeUsers.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetPageLikeUsers.Responses.$200>
  /**
   * getPageOperations - Get permitted operations for page
   * 
   * Returns the permitted operations on specific page.
   * 
   * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
   * Permission to view the parent content of the page and its corresponding space.
   */
  'getPageOperations'(
    parameters?: Parameters<Paths.GetPageOperations.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetPageOperations.Responses.$200>
  /**
   * getPageContentProperties - Get content properties for page
   * 
   * Retrieves Content Properties tied to a specified page.
   * 
   * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
   * Permission to view the page.
   */
  'getPageContentProperties'(
    parameters?: Parameters<Paths.GetPageContentProperties.QueryParameters & Paths.GetPageContentProperties.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetPageContentProperties.Responses.$200>
  /**
   * createPageProperty - Create content property for page
   * 
   * Creates a new content property for a page.
   * 
   * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
   * Permission to update the page.
   */
  'createPageProperty'(
    parameters?: Parameters<Paths.CreatePageProperty.PathParameters> | null,
    data?: Paths.CreatePageProperty.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.CreatePageProperty.Responses.$200>
  /**
   * getPageContentPropertiesById - Get content property for page by id
   * 
   * Retrieves a specific Content Property by ID that is attached to a specified page.
   * 
   * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
   * Permission to view the page.
   */
  'getPageContentPropertiesById'(
    parameters?: Parameters<Paths.GetPageContentPropertiesById.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetPageContentPropertiesById.Responses.$200>
  /**
   * updatePagePropertyById - Update content property for page by id
   * 
   * Update a content property for a page by its id. 
   * 
   * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
   * Permission to edit the page.
   */
  'updatePagePropertyById'(
    parameters?: Parameters<Paths.UpdatePagePropertyById.PathParameters> | null,
    data?: Paths.UpdatePagePropertyById.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.UpdatePagePropertyById.Responses.$200>
  /**
   * deletePagePropertyById - Delete content property for page by id
   * 
   * Deletes a content property for a page by its id. 
   * 
   * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
   * Permission to edit the page.
   */
  'deletePagePropertyById'(
    parameters?: Parameters<Paths.DeletePagePropertyById.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.DeletePagePropertyById.Responses.$204>
  /**
   * postRedactPage - Redact Content in a Confluence Page
   * 
   * Redacts sensitive content in a Confluence page by replacing specified text ranges with redaction markers. 
   * Each redaction in the response includes a unique UUID for restoration (except code block redactions). 
   * The response metadata items maintain the same order as the input redaction pointers, and completely 
   * overlapping redactions are merged into a single redaction with one UUID.
   * 
   * **Note**: This endpoint requires **Atlassian Guard Premium**.
   * 
   */
  'postRedactPage'(
    parameters?: Parameters<Paths.PostRedactPage.PathParameters> | null,
    data?: Paths.PostRedactPage.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.PostRedactPage.Responses.$202>
  /**
   * postRedactBlog - Redact Content in a Confluence Blog Post
   * 
   * Redacts sensitive content in a Confluence blog post by replacing specified text ranges with redaction markers. 
   * Each redaction in the response includes a unique UUID for restoration (except code block redactions). 
   * The response metadata items maintain the same order as the input redaction pointers, and completely 
   * overlapping redactions are merged into a single redaction with one UUID.
   * 
   * **Note**: This endpoint requires **Atlassian Guard Premium**.
   * 
   */
  'postRedactBlog'(
    parameters?: Parameters<Paths.PostRedactBlog.PathParameters> | null,
    data?: Paths.PostRedactBlog.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.PostRedactBlog.Responses.$202>
  /**
   * updatePageTitle - Update page title
   * 
   * Updates the title of a specified page.
   * 
   * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
   * Permission to view the page and its corresponding space. Permission to update pages in the space.
   */
  'updatePageTitle'(
    parameters?: Parameters<Paths.UpdatePageTitle.PathParameters> | null,
    data?: Paths.UpdatePageTitle.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.UpdatePageTitle.Responses.$200>
  /**
   * getPageVersions - Get page versions
   * 
   * Returns the versions of specific page.
   * 
   * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
   * Permission to view the page and its corresponding space.
   */
  'getPageVersions'(
    parameters?: Parameters<Paths.GetPageVersions.QueryParameters & Paths.GetPageVersions.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetPageVersions.Responses.$200>
  /**
   * createWhiteboard - Create whiteboard
   * 
   * Creates a whiteboard in the space.
   * 
   * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
   * Permission to view the corresponding space. Permission to create a whiteboard in the space.
   */
  'createWhiteboard'(
    parameters?: Parameters<Paths.CreateWhiteboard.QueryParameters> | null,
    data?: Paths.CreateWhiteboard.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.CreateWhiteboard.Responses.$200>
  /**
   * getWhiteboardById - Get whiteboard by id
   * 
   * Returns a specific whiteboard.
   * 
   * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
   * Permission to view the whiteboard and its corresponding space.
   */
  'getWhiteboardById'(
    parameters?: Parameters<Paths.GetWhiteboardById.QueryParameters & Paths.GetWhiteboardById.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetWhiteboardById.Responses.$200>
  /**
   * deleteWhiteboard - Delete whiteboard
   * 
   * Delete a whiteboard by id.
   * 
   * Deleting a whiteboard moves the whiteboard to the trash, where it can be restored later
   * 
   * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
   * Permission to view the whiteboard and its corresponding space.
   * Permission to delete whiteboards in the space.
   */
  'deleteWhiteboard'(
    parameters?: Parameters<Paths.DeleteWhiteboard.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<any>
  /**
   * getWhiteboardContentProperties - Get content properties for whiteboard
   * 
   * Retrieves Content Properties tied to a specified whiteboard.
   * 
   * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
   * Permission to view the whiteboard.
   */
  'getWhiteboardContentProperties'(
    parameters?: Parameters<Paths.GetWhiteboardContentProperties.QueryParameters & Paths.GetWhiteboardContentProperties.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetWhiteboardContentProperties.Responses.$200>
  /**
   * createWhiteboardProperty - Create content property for whiteboard
   * 
   * Creates a new content property for a whiteboard.
   * 
   * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
   * Permission to update the whiteboard.
   */
  'createWhiteboardProperty'(
    parameters?: Parameters<Paths.CreateWhiteboardProperty.PathParameters> | null,
    data?: Paths.CreateWhiteboardProperty.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.CreateWhiteboardProperty.Responses.$200>
  /**
   * getWhiteboardContentPropertiesById - Get content property for whiteboard by id
   * 
   * Retrieves a specific Content Property by ID that is attached to a specified whiteboard.
   * 
   * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
   * Permission to view the whiteboard.
   */
  'getWhiteboardContentPropertiesById'(
    parameters?: Parameters<Paths.GetWhiteboardContentPropertiesById.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetWhiteboardContentPropertiesById.Responses.$200>
  /**
   * updateWhiteboardPropertyById - Update content property for whiteboard by id
   * 
   * Update a content property for a whiteboard by its id. 
   * 
   * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
   * Permission to edit the whiteboard.
   */
  'updateWhiteboardPropertyById'(
    parameters?: Parameters<Paths.UpdateWhiteboardPropertyById.PathParameters> | null,
    data?: Paths.UpdateWhiteboardPropertyById.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.UpdateWhiteboardPropertyById.Responses.$200>
  /**
   * deleteWhiteboardPropertyById - Delete content property for whiteboard by id
   * 
   * Deletes a content property for a whiteboard by its id. 
   * 
   * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
   * Permission to edit the whiteboard.
   */
  'deleteWhiteboardPropertyById'(
    parameters?: Parameters<Paths.DeleteWhiteboardPropertyById.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.DeleteWhiteboardPropertyById.Responses.$204>
  /**
   * getWhiteboardOperations - Get permitted operations for a whiteboard
   * 
   * Returns the permitted operations on specific whiteboard.
   * 
   * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
   * Permission to view the whiteboard and its corresponding space.
   */
  'getWhiteboardOperations'(
    parameters?: Parameters<Paths.GetWhiteboardOperations.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetWhiteboardOperations.Responses.$200>
  /**
   * getWhiteboardDirectChildren - Get direct children of a whiteboard
   * 
   * Returns all children for given whiteboard id in the content tree. The number of results is limited by the `limit` parameter and additional results (if available)
   * will be available through the `next` URL present in the `Link` response header.
   * 
   * The following types of content will be returned:
   * - Database
   * - Embed
   * - Folder
   * - Page
   * - Whiteboard
   * 
   * This endpoint returns minimal information about each child. To fetch more details, use a related endpoint based on the content type, such
   * as:
   * 
   * - [Get database by id](https://developer.atlassian.com/cloud/confluence/rest/v2/api-group-database/#api-databases-id-get)
   * - [Get embed by id](https://developer.atlassian.com/cloud/confluence/rest/v2/api-group-smart-link/#api-embeds-id-get)
   * - [Get folder by id](https://developer.atlassian.com/cloud/confluence/rest/v2/api-group-folder/#api-folders-id-get)
   * - [Get page by id](https://developer.atlassian.com/cloud/confluence/rest/v2/api-group-page/#api-pages-id-get)
   * - [Get whiteboard by id](https://developer.atlassian.com/cloud/confluence/rest/v2/api-group-whiteboard/#api-whiteboards-id-get).
   * 
   * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
   * Permission to access the Confluence site ('Can use' global permission).
   * Only content that the user has permission to view will be returned.
   */
  'getWhiteboardDirectChildren'(
    parameters?: Parameters<Paths.GetWhiteboardDirectChildren.QueryParameters & Paths.GetWhiteboardDirectChildren.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetWhiteboardDirectChildren.Responses.$200>
  /**
   * getWhiteboardDescendants - Get descendants of a whiteboard
   * 
   * Returns descendants in the content tree for a given whiteboard by ID in top-to-bottom order (that is, the highest descendant is the first
   * item in the response payload). The number of results is limited by the `limit` parameter and additional results (if available)
   * will be available by calling this endpoint with the cursor in the response payload. There is also a `depth` parameter specifying depth
   * of descendants to be fetched.
   * 
   * The following types of content will be returned:
   * - Database
   * - Embed
   * - Folder
   * - Page
   * - Whiteboard
   * 
   * This endpoint returns minimal information about each descendant. To fetch more details, use a related endpoint based on the content type, such
   * as:
   * 
   * - [Get database by id](https://developer.atlassian.com/cloud/confluence/rest/v2/api-group-database/#api-databases-id-get)
   * - [Get embed by id](https://developer.atlassian.com/cloud/confluence/rest/v2/api-group-smart-link/#api-embeds-id-get)
   * - [Get folder by id](https://developer.atlassian.com/cloud/confluence/rest/v2/api-group-folder/#api-folders-id-get)
   * - [Get page by id](https://developer.atlassian.com/cloud/confluence/rest/v2/api-group-page/#api-pages-id-get)
   * - [Get whiteboard by id](https://developer.atlassian.com/cloud/confluence/rest/v2/api-group-whiteboard/#api-whiteboards-id-get).
   * 
   * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
   * Permission to access the Confluence site ('Can use' global permission).
   * Permission to view the whiteboard and its corresponding space
   */
  'getWhiteboardDescendants'(
    parameters?: Parameters<Paths.GetWhiteboardDescendants.QueryParameters & Paths.GetWhiteboardDescendants.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetWhiteboardDescendants.Responses.$200>
  /**
   * getWhiteboardAncestors - Get all ancestors of whiteboard
   * 
   * Returns all ancestors for a given whiteboard by ID in top-to-bottom order (that is, the highest ancestor is the first
   * item in the response payload). The number of results is limited by the `limit` parameter and additional results (if available)
   * will be available by calling this endpoint with the ID of first ancestor in the response payload.
   * 
   * This endpoint returns minimal information about each ancestor. To fetch more details, use a related endpoint, such
   * as [Get whiteboard by id](https://developer.atlassian.com/cloud/confluence/rest/v2/api-group-whiteboard/#api-whiteboards-id-get).
   * 
   * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
   * Permission to access the Confluence site ('Can use' global permission).
   * Permission to view the whiteboard and its corresponding space
   */
  'getWhiteboardAncestors'(
    parameters?: Parameters<Paths.GetWhiteboardAncestors.QueryParameters & Paths.GetWhiteboardAncestors.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetWhiteboardAncestors.Responses.$200>
  /**
   * createDatabase - Create database
   * 
   * Creates a database in the space.
   * 
   * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
   * Permission to view the corresponding space. Permission to create a database in the space.
   */
  'createDatabase'(
    parameters?: Parameters<Paths.CreateDatabase.QueryParameters> | null,
    data?: Paths.CreateDatabase.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.CreateDatabase.Responses.$200>
  /**
   * getDatabaseById - Get database by id
   * 
   * Returns a specific database.
   * 
   * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
   * Permission to view the database and its corresponding space.
   */
  'getDatabaseById'(
    parameters?: Parameters<Paths.GetDatabaseById.QueryParameters & Paths.GetDatabaseById.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetDatabaseById.Responses.$200>
  /**
   * deleteDatabase - Delete database
   * 
   * Delete a database by id.
   * 
   * Deleting a database moves the database to the trash, where it can be restored later
   * 
   * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
   * Permission to view the database and its corresponding space.
   * Permission to delete databases in the space.
   */
  'deleteDatabase'(
    parameters?: Parameters<Paths.DeleteDatabase.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<any>
  /**
   * getDatabaseContentProperties - Get content properties for database
   * 
   * Retrieves Content Properties tied to a specified database.
   * 
   * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
   * Permission to view the database.
   */
  'getDatabaseContentProperties'(
    parameters?: Parameters<Paths.GetDatabaseContentProperties.QueryParameters & Paths.GetDatabaseContentProperties.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetDatabaseContentProperties.Responses.$200>
  /**
   * createDatabaseProperty - Create content property for database
   * 
   * Creates a new content property for a database.
   * 
   * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
   * Permission to update the database.
   */
  'createDatabaseProperty'(
    parameters?: Parameters<Paths.CreateDatabaseProperty.PathParameters> | null,
    data?: Paths.CreateDatabaseProperty.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.CreateDatabaseProperty.Responses.$200>
  /**
   * getDatabaseContentPropertiesById - Get content property for database by id
   * 
   * Retrieves a specific Content Property by ID that is attached to a specified database.
   * 
   * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
   * Permission to view the database.
   */
  'getDatabaseContentPropertiesById'(
    parameters?: Parameters<Paths.GetDatabaseContentPropertiesById.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetDatabaseContentPropertiesById.Responses.$200>
  /**
   * updateDatabasePropertyById - Update content property for database by id
   * 
   * Update a content property for a database by its id. 
   * 
   * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
   * Permission to edit the database.
   */
  'updateDatabasePropertyById'(
    parameters?: Parameters<Paths.UpdateDatabasePropertyById.PathParameters> | null,
    data?: Paths.UpdateDatabasePropertyById.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.UpdateDatabasePropertyById.Responses.$200>
  /**
   * deleteDatabasePropertyById - Delete content property for database by id
   * 
   * Deletes a content property for a database by its id. 
   * 
   * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
   * Permission to edit the database.
   */
  'deleteDatabasePropertyById'(
    parameters?: Parameters<Paths.DeleteDatabasePropertyById.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.DeleteDatabasePropertyById.Responses.$204>
  /**
   * getDatabaseOperations - Get permitted operations for a database
   * 
   * Returns the permitted operations on specific database.
   * 
   * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
   * Permission to view the database and its corresponding space.
   */
  'getDatabaseOperations'(
    parameters?: Parameters<Paths.GetDatabaseOperations.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetDatabaseOperations.Responses.$200>
  /**
   * getDatabaseDirectChildren - Get direct children of a database
   * 
   * Returns all children for given database id in the content tree. The number of results is limited by the `limit` parameter and additional results (if available)
   * will be available through the `next` URL present in the `Link` response header.
   * 
   * The following types of content will be returned:
   * - Database
   * - Embed
   * - Folder
   * - Page
   * - Whiteboard
   * 
   * This endpoint returns minimal information about each child. To fetch more details, use a related endpoint based on the content type, such
   * as:
   * 
   * - [Get database by id](https://developer.atlassian.com/cloud/confluence/rest/v2/api-group-database/#api-databases-id-get)
   * - [Get embed by id](https://developer.atlassian.com/cloud/confluence/rest/v2/api-group-smart-link/#api-embeds-id-get)
   * - [Get folder by id](https://developer.atlassian.com/cloud/confluence/rest/v2/api-group-folder/#api-folders-id-get)
   * - [Get page by id](https://developer.atlassian.com/cloud/confluence/rest/v2/api-group-page/#api-pages-id-get)
   * - [Get whiteboard by id](https://developer.atlassian.com/cloud/confluence/rest/v2/api-group-whiteboard/#api-whiteboards-id-get).
   * 
   * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
   * Permission to access the Confluence site ('Can use' global permission).
   * Only content that the user has permission to view will be returned.
   */
  'getDatabaseDirectChildren'(
    parameters?: Parameters<Paths.GetDatabaseDirectChildren.QueryParameters & Paths.GetDatabaseDirectChildren.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetDatabaseDirectChildren.Responses.$200>
  /**
   * getDatabaseDescendants - Get descendants of a database
   * 
   * Returns descendants in the content tree for a given database by ID in top-to-bottom order (that is, the highest descendant is the first
   * item in the response payload). The number of results is limited by the `limit` parameter and additional results (if available)
   * will be available by calling this endpoint with the cursor in the response payload. There is also a `depth` parameter specifying depth
   * of descendants to be fetched.
   * 
   * The following types of content will be returned:
   * - Database
   * - Embed
   * - Folder
   * - Page
   * - Whiteboard
   * 
   * This endpoint returns minimal information about each descendant. To fetch more details, use a related endpoint based on the content type, such
   * as:
   * 
   * - [Get database by id](https://developer.atlassian.com/cloud/confluence/rest/v2/api-group-database/#api-databases-id-get)
   * - [Get embed by id](https://developer.atlassian.com/cloud/confluence/rest/v2/api-group-smart-link/#api-embeds-id-get)
   * - [Get folder by id](https://developer.atlassian.com/cloud/confluence/rest/v2/api-group-folder/#api-folders-id-get)
   * - [Get page by id](https://developer.atlassian.com/cloud/confluence/rest/v2/api-group-page/#api-pages-id-get)
   * - [Get whiteboard by id](https://developer.atlassian.com/cloud/confluence/rest/v2/api-group-whiteboard/#api-whiteboards-id-get).
   * 
   * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
   * Permission to access the Confluence site ('Can use' global permission).
   * Permission to view the database and its corresponding space
   */
  'getDatabaseDescendants'(
    parameters?: Parameters<Paths.GetDatabaseDescendants.QueryParameters & Paths.GetDatabaseDescendants.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetDatabaseDescendants.Responses.$200>
  /**
   * getDatabaseAncestors - Get all ancestors of database
   * 
   * Returns all ancestors for a given database by ID in top-to-bottom order (that is, the highest ancestor is the first
   * item in the response payload). The number of results is limited by the `limit` parameter and additional results (if available)
   * will be available by calling this endpoint with the ID of first ancestor in the response payload.
   * 
   * This endpoint returns minimal information about each ancestor. To fetch more details, use a related endpoint, such
   * as [Get database by id](https://developer.atlassian.com/cloud/confluence/rest/v2/api-group-database/#api-databases-id-get).
   * 
   * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
   * Permission to access the Confluence site ('Can use' global permission).
   * Permission to view the database and its corresponding space
   */
  'getDatabaseAncestors'(
    parameters?: Parameters<Paths.GetDatabaseAncestors.QueryParameters & Paths.GetDatabaseAncestors.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetDatabaseAncestors.Responses.$200>
  /**
   * createSmartLink - Create Smart Link in the content tree
   * 
   * Creates a Smart Link in the content tree in the space.
   * 
   * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
   * Permission to view the corresponding space. Permission to create a Smart Link in the content tree in the space.
   */
  'createSmartLink'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: Paths.CreateSmartLink.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.CreateSmartLink.Responses.$200>
  /**
   * getSmartLinkById - Get Smart Link in the content tree by id
   * 
   * Returns a specific Smart Link in the content tree.
   * 
   * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
   * Permission to view the Smart Link in the content tree and its corresponding space.
   */
  'getSmartLinkById'(
    parameters?: Parameters<Paths.GetSmartLinkById.QueryParameters & Paths.GetSmartLinkById.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetSmartLinkById.Responses.$200>
  /**
   * deleteSmartLink - Delete Smart Link in the content tree
   * 
   * Delete a Smart Link in the content tree by id.
   * 
   * Deleting a Smart Link in the content tree moves the Smart Link to the trash, where it can be restored later
   * 
   * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
   * Permission to view the Smart Link in the content tree and its corresponding space.
   * Permission to delete Smart Links in the content tree in the space.
   */
  'deleteSmartLink'(
    parameters?: Parameters<Paths.DeleteSmartLink.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<any>
  /**
   * getSmartLinkContentProperties - Get content properties for Smart Link in the content tree
   * 
   * Retrieves Content Properties tied to a specified Smart Link in the content tree.
   * 
   * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
   * Permission to view the Smart Link in the content tree.
   */
  'getSmartLinkContentProperties'(
    parameters?: Parameters<Paths.GetSmartLinkContentProperties.QueryParameters & Paths.GetSmartLinkContentProperties.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetSmartLinkContentProperties.Responses.$200>
  /**
   * createSmartLinkProperty - Create content property for Smart Link in the content tree
   * 
   * Creates a new content property for a Smart Link in the content tree.
   * 
   * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
   * Permission to update the Smart Link in the content tree.
   */
  'createSmartLinkProperty'(
    parameters?: Parameters<Paths.CreateSmartLinkProperty.PathParameters> | null,
    data?: Paths.CreateSmartLinkProperty.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.CreateSmartLinkProperty.Responses.$200>
  /**
   * getSmartLinkContentPropertiesById - Get content property for Smart Link in the content tree by id
   * 
   * Retrieves a specific Content Property by ID that is attached to a specified Smart Link in the content tree.
   * 
   * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
   * Permission to view the Smart Link in the content tree.
   */
  'getSmartLinkContentPropertiesById'(
    parameters?: Parameters<Paths.GetSmartLinkContentPropertiesById.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetSmartLinkContentPropertiesById.Responses.$200>
  /**
   * updateSmartLinkPropertyById - Update content property for Smart Link in the content tree by id
   * 
   * Update a content property for a Smart Link in the content tree by its id. 
   * 
   * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
   * Permission to edit the Smart Link in the content tree.
   */
  'updateSmartLinkPropertyById'(
    parameters?: Parameters<Paths.UpdateSmartLinkPropertyById.PathParameters> | null,
    data?: Paths.UpdateSmartLinkPropertyById.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.UpdateSmartLinkPropertyById.Responses.$200>
  /**
   * deleteSmartLinkPropertyById - Delete content property for Smart Link in the content tree by id
   * 
   * Deletes a content property for a Smart Link in the content tree by its id. 
   * 
   * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
   * Permission to edit the Smart Link in the content tree.
   */
  'deleteSmartLinkPropertyById'(
    parameters?: Parameters<Paths.DeleteSmartLinkPropertyById.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.DeleteSmartLinkPropertyById.Responses.$204>
  /**
   * getSmartLinkOperations - Get permitted operations for a Smart Link in the content tree
   * 
   * Returns the permitted operations on specific Smart Link in the content tree.
   * 
   * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
   * Permission to view the Smart Link in the content tree and its corresponding space.
   */
  'getSmartLinkOperations'(
    parameters?: Parameters<Paths.GetSmartLinkOperations.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetSmartLinkOperations.Responses.$200>
  /**
   * getSmartLinkDirectChildren - Get direct children of a Smart Link
   * 
   * Returns all children for given smart link id in the content tree. The number of results is limited by the `limit` parameter and additional results (if available)
   * will be available through the `next` URL present in the `Link` response header.
   * 
   * The following types of content will be returned:
   * - Database
   * - Embed
   * - Folder
   * - Page
   * - Whiteboard
   * 
   * This endpoint returns minimal information about each child. To fetch more details, use a related endpoint based on the content type, such
   * as:
   * 
   * - [Get database by id](https://developer.atlassian.com/cloud/confluence/rest/v2/api-group-database/#api-databases-id-get)
   * - [Get embed by id](https://developer.atlassian.com/cloud/confluence/rest/v2/api-group-smart-link/#api-embeds-id-get)
   * - [Get folder by id](https://developer.atlassian.com/cloud/confluence/rest/v2/api-group-folder/#api-folders-id-get)
   * - [Get page by id](https://developer.atlassian.com/cloud/confluence/rest/v2/api-group-page/#api-pages-id-get)
   * - [Get whiteboard by id](https://developer.atlassian.com/cloud/confluence/rest/v2/api-group-whiteboard/#api-whiteboards-id-get).
   * 
   * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
   * Permission to access the Confluence site ('Can use' global permission).
   * Only content that the user has permission to view will be returned.
   */
  'getSmartLinkDirectChildren'(
    parameters?: Parameters<Paths.GetSmartLinkDirectChildren.QueryParameters & Paths.GetSmartLinkDirectChildren.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetSmartLinkDirectChildren.Responses.$200>
  /**
   * getSmartLinkDescendants - Get descendants of a smart link
   * 
   * Returns descendants in the content tree for a given smart link by ID in top-to-bottom order (that is, the highest descendant is the first
   * item in the response payload). The number of results is limited by the `limit` parameter and additional results (if available)
   * will be available by calling this endpoint with the cursor in the response payload. There is also a `depth` parameter specifying depth
   * of descendants to be fetched.
   * 
   * The following types of content will be returned:
   * - Database
   * - Embed
   * - Folder
   * - Page
   * - Whiteboard
   * 
   * 
   * This endpoint returns minimal information about each descendant. To fetch more details, use a related endpoint based on the content type, such
   * as:
   * 
   * - [Get database by id](https://developer.atlassian.com/cloud/confluence/rest/v2/api-group-database/#api-databases-id-get)
   * - [Get embed by id](https://developer.atlassian.com/cloud/confluence/rest/v2/api-group-smart-link/#api-embeds-id-get)
   * - [Get folder by id](https://developer.atlassian.com/cloud/confluence/rest/v2/api-group-folder/#api-folders-id-get)
   * - [Get page by id](https://developer.atlassian.com/cloud/confluence/rest/v2/api-group-page/#api-pages-id-get)
   * - [Get whiteboard by id](https://developer.atlassian.com/cloud/confluence/rest/v2/api-group-whiteboard/#api-whiteboards-id-get).
   * 
   * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
   * Permission to access the Confluence site ('Can use' global permission).
   * Permission to view the smart link and its corresponding space
   */
  'getSmartLinkDescendants'(
    parameters?: Parameters<Paths.GetSmartLinkDescendants.QueryParameters & Paths.GetSmartLinkDescendants.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetSmartLinkDescendants.Responses.$200>
  /**
   * getSmartLinkAncestors - Get all ancestors of Smart Link in content tree
   * 
   * Returns all ancestors for a given Smart Link in the content tree by ID in top-to-bottom order (that is, the highest ancestor is
   * the first item in the response payload). The number of results is limited by the `limit` parameter and additional results 
   * (if available) will be available by calling this endpoint with the ID of first ancestor in the response payload.
   * 
   * This endpoint returns minimal information about each ancestor. To fetch more details, use a related endpoint, such
   * as [Get Smart Link in the content tree by id](https://developer.atlassian.com/cloud/confluence/rest/v2/api-group-smart-link/#api-embeds-id-get).
   * 
   * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
   * Permission to access the Confluence site ('Can use' global permission).
   * Permission to view the Smart Link in the content tree and its corresponding space
   */
  'getSmartLinkAncestors'(
    parameters?: Parameters<Paths.GetSmartLinkAncestors.QueryParameters & Paths.GetSmartLinkAncestors.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetSmartLinkAncestors.Responses.$200>
  /**
   * createFolder - Create folder
   * 
   * Creates a folder in the space.
   * 
   * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
   * Permission to view the corresponding space. Permission to create a folder in the space.
   */
  'createFolder'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: Paths.CreateFolder.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.CreateFolder.Responses.$200>
  /**
   * getFolderById - Get folder by id
   * 
   * Returns a specific folder.
   * 
   * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
   * Permission to view the folder and its corresponding space.
   */
  'getFolderById'(
    parameters?: Parameters<Paths.GetFolderById.QueryParameters & Paths.GetFolderById.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetFolderById.Responses.$200>
  /**
   * deleteFolder - Delete folder
   * 
   * Delete a folder by id.
   * 
   * Deleting a folder moves the folder to the trash, where it can be restored later
   * 
   * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
   * Permission to view the folder and its corresponding space.
   * Permission to delete folders in the space.
   */
  'deleteFolder'(
    parameters?: Parameters<Paths.DeleteFolder.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<any>
  /**
   * getFolderContentProperties - Get content properties for folder
   * 
   * Retrieves Content Properties tied to a specified folder.
   * 
   * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
   * Permission to view the folder.
   */
  'getFolderContentProperties'(
    parameters?: Parameters<Paths.GetFolderContentProperties.QueryParameters & Paths.GetFolderContentProperties.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetFolderContentProperties.Responses.$200>
  /**
   * createFolderProperty - Create content property for folder
   * 
   * Creates a new content property for a folder.
   * 
   * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
   * Permission to update the folder.
   */
  'createFolderProperty'(
    parameters?: Parameters<Paths.CreateFolderProperty.PathParameters> | null,
    data?: Paths.CreateFolderProperty.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.CreateFolderProperty.Responses.$200>
  /**
   * getFolderContentPropertiesById - Get content property for folder by id
   * 
   * Retrieves a specific Content Property by ID that is attached to a specified folder.
   * 
   * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
   * Permission to view the folder.
   */
  'getFolderContentPropertiesById'(
    parameters?: Parameters<Paths.GetFolderContentPropertiesById.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetFolderContentPropertiesById.Responses.$200>
  /**
   * updateFolderPropertyById - Update content property for folder by id
   * 
   * Update a content property for a folder by its id. 
   * 
   * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
   * Permission to edit the folder.
   */
  'updateFolderPropertyById'(
    parameters?: Parameters<Paths.UpdateFolderPropertyById.PathParameters> | null,
    data?: Paths.UpdateFolderPropertyById.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.UpdateFolderPropertyById.Responses.$200>
  /**
   * deleteFolderPropertyById - Delete content property for folder by id
   * 
   * Deletes a content property for a folder by its id. 
   * 
   * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
   * Permission to edit the folder.
   */
  'deleteFolderPropertyById'(
    parameters?: Parameters<Paths.DeleteFolderPropertyById.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.DeleteFolderPropertyById.Responses.$204>
  /**
   * getFolderOperations - Get permitted operations for a folder
   * 
   * Returns the permitted operations on specific folder.
   * 
   * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
   * Permission to view the folder and its corresponding space.
   */
  'getFolderOperations'(
    parameters?: Parameters<Paths.GetFolderOperations.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetFolderOperations.Responses.$200>
  /**
   * getFolderDirectChildren - Get direct children of a folder
   * 
   * Returns all children for given folder id in the content tree. The number of results is limited by the `limit` parameter and additional results (if available)
   * will be available through the `next` URL present in the `Link` response header.
   * 
   * The following types of content will be returned:
   * - Database
   * - Embed
   * - Folder
   * - Page
   * - Whiteboard
   * 
   * This endpoint returns minimal information about each child. To fetch more details, use a related endpoint based on the content type, such
   * as:
   * 
   * - [Get database by id](https://developer.atlassian.com/cloud/confluence/rest/v2/api-group-database/#api-databases-id-get)
   * - [Get embed by id](https://developer.atlassian.com/cloud/confluence/rest/v2/api-group-smart-link/#api-embeds-id-get)
   * - [Get folder by id](https://developer.atlassian.com/cloud/confluence/rest/v2/api-group-folder/#api-folders-id-get)
   * - [Get page by id](https://developer.atlassian.com/cloud/confluence/rest/v2/api-group-page/#api-pages-id-get)
   * - [Get whiteboard by id](https://developer.atlassian.com/cloud/confluence/rest/v2/api-group-whiteboard/#api-whiteboards-id-get).
   * 
   * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
   * Permission to access the Confluence site ('Can use' global permission).
   * Only content that the user has permission to view will be returned.
   */
  'getFolderDirectChildren'(
    parameters?: Parameters<Paths.GetFolderDirectChildren.QueryParameters & Paths.GetFolderDirectChildren.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetFolderDirectChildren.Responses.$200>
  /**
   * getFolderDescendants - Get descendants of folder
   * 
   * Returns descendants in the content tree for a given folder by ID in top-to-bottom order (that is, the highest descendant is the first
   * item in the response payload). The number of results is limited by the `limit` parameter and additional results (if available)
   * will be available by calling this endpoint with the cursor in the response payload. There is also a `depth` parameter specifying depth
   * of descendants to be fetched.
   * 
   * The following types of content will be returned:
   * - Database
   * - Embed
   * - Folder
   * - Page
   * - Whiteboard
   * 
   * This endpoint returns minimal information about each descendant. To fetch more details, use a related endpoint based on the content type, such
   * as:
   * 
   * - [Get database by id](https://developer.atlassian.com/cloud/confluence/rest/v2/api-group-database/#api-databases-id-get)
   * - [Get embed by id](https://developer.atlassian.com/cloud/confluence/rest/v2/api-group-smart-link/#api-embeds-id-get)
   * - [Get folder by id](https://developer.atlassian.com/cloud/confluence/rest/v2/api-group-folder/#api-folders-id-get)
   * - [Get page by id](https://developer.atlassian.com/cloud/confluence/rest/v2/api-group-page/#api-pages-id-get)
   * - [Get whiteboard by id](https://developer.atlassian.com/cloud/confluence/rest/v2/api-group-whiteboard/#api-whiteboards-id-get).
   * 
   * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
   * Permission to access the Confluence site ('Can use' global permission).
   * Permission to view the  and its corresponding space
   */
  'getFolderDescendants'(
    parameters?: Parameters<Paths.GetFolderDescendants.QueryParameters & Paths.GetFolderDescendants.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetFolderDescendants.Responses.$200>
  /**
   * getFolderAncestors - Get all ancestors of folder
   * 
   * Returns all ancestors for a given folder by ID in top-to-bottom order (that is, the highest ancestor is
   * the first item in the response payload). The number of results is limited by the `limit` parameter and additional results 
   * (if available) will be available by calling this endpoint with the ID of first ancestor in the response payload.
   * 
   * This endpoint returns minimal information about each ancestor. To fetch more details, use a related endpoint, such
   * as [Get folder by id](https://developer.atlassian.com/cloud/confluence/rest/v2/api-group-smart-link/#api-folders-id-get).
   * 
   * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
   * Permission to access the Confluence site ('Can use' global permission).
   * Permission to view the folder and its corresponding space
   */
  'getFolderAncestors'(
    parameters?: Parameters<Paths.GetFolderAncestors.QueryParameters & Paths.GetFolderAncestors.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetFolderAncestors.Responses.$200>
  /**
   * getPageVersionDetails - Get version details for page version
   * 
   * Retrieves version details for the specified page and version number.
   * 
   * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
   * Permission to view the page.
   */
  'getPageVersionDetails'(
    parameters?: Parameters<Paths.GetPageVersionDetails.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetPageVersionDetails.Responses.$200>
  /**
   * getCustomContentVersions - Get custom content versions
   * 
   * Returns the versions of specific custom content.
   * 
   * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
   * Permission to view the custom content and its corresponding page and space.
   */
  'getCustomContentVersions'(
    parameters?: Parameters<Paths.GetCustomContentVersions.QueryParameters & Paths.GetCustomContentVersions.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetCustomContentVersions.Responses.$200>
  /**
   * getCustomContentVersionDetails - Get version details for custom content version
   * 
   * Retrieves version details for the specified custom content and version number.
   * 
   * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
   * Permission to view the page.
   */
  'getCustomContentVersionDetails'(
    parameters?: Parameters<Paths.GetCustomContentVersionDetails.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetCustomContentVersionDetails.Responses.$200>
  /**
   * getSpaces - Get spaces
   * 
   * Returns all spaces. The results will be sorted by id ascending. The number of results is limited by the `limit` parameter and
   * additional results (if available) will be available through the `next` URL present in the `Link` response header.
   * 
   * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
   * Permission to access the Confluence site ('Can use' global permission).
   * Only spaces that the user has permission to view will be returned.
   */
  'getSpaces'(
    parameters?: Parameters<Paths.GetSpaces.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetSpaces.Responses.$200>
  /**
   * createSpace - Create space
   * 
   * Creates a Space as specified in the payload.
   * 
   * Available as part of the [Role-Based Access Controls Beta](https://community.atlassian.com/forums/Confluence-articles/Beta-Simplify-space-access-in-Confluence-with-roles/ba-p/3044550). 
   * 
   * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
   * Permission to create spaces.
   */
  'createSpace'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: Paths.CreateSpace.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.CreateSpace.Responses.$201>
  /**
   * getSpaceById - Get space by id
   * 
   * Returns a specific space.
   * 
   * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
   * Permission to view the space.
   */
  'getSpaceById'(
    parameters?: Parameters<Paths.GetSpaceById.QueryParameters & Paths.GetSpaceById.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetSpaceById.Responses.$200>
  /**
   * getBlogPostsInSpace - Get blog posts in space
   * 
   * Returns all blog posts in a space. The number of results is limited by the `limit` parameter and additional results (if available)
   * will be available through the `next` URL present in the `Link` response header.
   * 
   * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
   * Permission to access the Confluence site ('Can use' global permission) and view the space.
   * Only blog posts that the user has permission to view will be returned.
   */
  'getBlogPostsInSpace'(
    parameters?: Parameters<Paths.GetBlogPostsInSpace.QueryParameters & Paths.GetBlogPostsInSpace.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetBlogPostsInSpace.Responses.$200>
  /**
   * getSpaceLabels - Get labels for space
   * 
   * Returns the labels of specific space. The number of results is limited by the `limit` parameter and additional results (if available)
   * will be available through the `next` URL present in the `Link` response header.
   * 
   * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
   * Permission to view the space.
   * Only labels that the user has permission to view will be returned.
   */
  'getSpaceLabels'(
    parameters?: Parameters<Paths.GetSpaceLabels.QueryParameters & Paths.GetSpaceLabels.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetSpaceLabels.Responses.$200>
  /**
   * getSpaceContentLabels - Get labels for space content
   * 
   * Returns the labels of space content (pages, blogposts etc). The number of results is limited by the `limit` parameter and additional results (if available)
   * will be available through the `next` URL present in the `Link` response header.
   * 
   * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
   * Permission to view the space.
   * Only labels that the user has permission to view will be returned.
   */
  'getSpaceContentLabels'(
    parameters?: Parameters<Paths.GetSpaceContentLabels.QueryParameters & Paths.GetSpaceContentLabels.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetSpaceContentLabels.Responses.$200>
  /**
   * getCustomContentByTypeInSpace - Get custom content by type in space
   * 
   * Returns all custom content for a given type within a given space. The number of results is limited by the `limit` parameter and additional results (if available)
   * will be available through the `next` URL present in the `Link` response header.
   * 
   * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
   * Permission to view the custom content and the corresponding space.
   */
  'getCustomContentByTypeInSpace'(
    parameters?: Parameters<Paths.GetCustomContentByTypeInSpace.QueryParameters & Paths.GetCustomContentByTypeInSpace.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetCustomContentByTypeInSpace.Responses.$200>
  /**
   * getSpaceOperations - Get permitted operations for space
   * 
   * Returns the permitted operations on specific space.
   * 
   * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
   * Permission to view the corresponding space.
   */
  'getSpaceOperations'(
    parameters?: Parameters<Paths.GetSpaceOperations.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetSpaceOperations.Responses.$200>
  /**
   * getPagesInSpace - Get pages in space
   * 
   * Returns all pages in a space. The number of results is limited by the `limit` parameter and additional results (if available)
   * will be available through the `next` URL present in the `Link` response header.
   * 
   * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
   * Permission to access the Confluence site ('Can use' global permission) and 'View' permission for the space.
   * Only pages that the user has permission to view will be returned.
   */
  'getPagesInSpace'(
    parameters?: Parameters<Paths.GetPagesInSpace.QueryParameters & Paths.GetPagesInSpace.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetPagesInSpace.Responses.$200>
  /**
   * getSpaceProperties - Get space properties in space
   * 
   * Returns all properties for the given space. Space properties are a key-value storage associated with a space.
   * The limit parameter specifies the maximum number of results returned in a single response. Use the `link` response header
   * to paginate through additional results.
   * 
   * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
   * Permission to access the Confluence site ('Can use' global permission) and 'View' permission for the space.
   */
  'getSpaceProperties'(
    parameters?: Parameters<Paths.GetSpaceProperties.QueryParameters & Paths.GetSpaceProperties.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetSpaceProperties.Responses.$200>
  /**
   * createSpaceProperty - Create space property in space
   * 
   * Creates a new space property.
   * 
   * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
   * Permission to access the Confluence site ('Can use' global permission) and 'Admin' permission for the space.
   */
  'createSpaceProperty'(
    parameters?: Parameters<Paths.CreateSpaceProperty.PathParameters> | null,
    data?: Paths.CreateSpaceProperty.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.CreateSpaceProperty.Responses.$201>
  /**
   * getSpacePropertyById - Get space property by id
   * 
   * Retrieve a space property by its id. 
   * 
   * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
   * Permission to access the Confluence site ('Can use' global permission) and 'View' permission for the space.
   */
  'getSpacePropertyById'(
    parameters?: Parameters<Paths.GetSpacePropertyById.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetSpacePropertyById.Responses.$200>
  /**
   * updateSpacePropertyById - Update space property by id
   * 
   * Update a space property by its id. 
   * 
   * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
   * Permission to access the Confluence site ('Can use' global permission) and 'Admin' permission for the space.
   */
  'updateSpacePropertyById'(
    parameters?: Parameters<Paths.UpdateSpacePropertyById.PathParameters> | null,
    data?: Paths.UpdateSpacePropertyById.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.UpdateSpacePropertyById.Responses.$200>
  /**
   * deleteSpacePropertyById - Delete space property by id
   * 
   * Deletes a space property by its id. 
   * 
   * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
   * Permission to access the Confluence site ('Can use' global permission) and 'Admin' permission for the space.
   */
  'deleteSpacePropertyById'(
    parameters?: Parameters<Paths.DeleteSpacePropertyById.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.DeleteSpacePropertyById.Responses.$204>
  /**
   * getSpacePermissionsAssignments - Get space permissions assignments
   * 
   * Returns space permission assignments for a specific space.
   * 
   * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
   * Permission to view the space.
   */
  'getSpacePermissionsAssignments'(
    parameters?: Parameters<Paths.GetSpacePermissionsAssignments.QueryParameters & Paths.GetSpacePermissionsAssignments.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetSpacePermissionsAssignments.Responses.$200>
  /**
   * getAvailableSpacePermissions - Get available space permissions
   * 
   * Retrieves the available space permissions.
   * 
   * Available as part of the [Role-Based Access Controls Beta](https://community.atlassian.com/forums/Confluence-articles/Beta-Simplify-space-access-in-Confluence-with-roles/ba-p/3044550). 
   * 
   * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
   * Permission to access the Confluence site.
   */
  'getAvailableSpacePermissions'(
    parameters?: Parameters<Paths.GetAvailableSpacePermissions.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetAvailableSpacePermissions.Responses.$200>
  /**
   * getAvailableSpaceRoles - Get available space roles
   * 
   * Retrieves the available space roles.
   * 
   * Available as part of the [Role-Based Access Controls Beta](https://community.atlassian.com/forums/Confluence-articles/Beta-Simplify-space-access-in-Confluence-with-roles/ba-p/3044550). 
   * 
   * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
   * Permission to access the Confluence site; if requesting a certain space's roles, permission to view the space.
   */
  'getAvailableSpaceRoles'(
    parameters?: Parameters<Paths.GetAvailableSpaceRoles.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetAvailableSpaceRoles.Responses.$200>
  /**
   * createSpaceRole - Create a space role
   * 
   * Create a space role.
   * 
   * Available as part of the [Role-Based Access Controls Beta](https://community.atlassian.com/forums/Confluence-articles/Beta-Simplify-space-access-in-Confluence-with-roles/ba-p/3044550). 
   * 
   * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
   * User must be an organization or site admin. Connect and Forge app users are not authorized to access this resource.
   */
  'createSpaceRole'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: Paths.CreateSpaceRole.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.CreateSpaceRole.Responses.$201>
  /**
   * getSpaceRolesById - Get space role by ID
   * 
   * Retrieves the space role by ID.
   * 
   * Available as part of the [Role-Based Access Controls Beta](https://community.atlassian.com/forums/Confluence-articles/Beta-Simplify-space-access-in-Confluence-with-roles/ba-p/3044550). 
   * 
   * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
   * Permission to access the Confluence site.
   */
  'getSpaceRolesById'(
    parameters?: Parameters<Paths.GetSpaceRolesById.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetSpaceRolesById.Responses.$200>
  /**
   * updateSpaceRole - Update a space role
   * 
   * Update a space role.
   * 
   * Available as part of the [Role-Based Access Controls Beta](https://community.atlassian.com/forums/Confluence-articles/Beta-Simplify-space-access-in-Confluence-with-roles/ba-p/3044550). 
   * 
   * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
   * User must be an organization or site admin. Connect and Forge app users are not authorized to access this resource.
   */
  'updateSpaceRole'(
    parameters?: Parameters<Paths.UpdateSpaceRole.PathParameters> | null,
    data?: Paths.UpdateSpaceRole.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.UpdateSpaceRole.Responses.$202>
  /**
   * deleteSpaceRole - Delete a space role
   * 
   * Delete a space role
   * 
   * Available as part of the [Role-Based Access Controls Beta](https://community.atlassian.com/forums/Confluence-articles/Beta-Simplify-space-access-in-Confluence-with-roles/ba-p/3044550). 
   * 
   * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
   * User must be an organization or site admin. Connect and Forge app users are not authorized to access this resource.
   */
  'deleteSpaceRole'(
    parameters?: Parameters<Paths.DeleteSpaceRole.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.DeleteSpaceRole.Responses.$202>
  /**
   * getSpaceRoleMode - Get space role mode
   * 
   * Retrieves the space role mode.
   * 
   * Available as part of the [Role-Based Access Controls Beta](https://community.atlassian.com/forums/Confluence-articles/Beta-Simplify-space-access-in-Confluence-with-roles/ba-p/3044550). 
   * 
   * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
   * Permission to access the Confluence site ('Can use' global permission).
   */
  'getSpaceRoleMode'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetSpaceRoleMode.Responses.$200>
  /**
   * getSpaceRoleAssignments - Get space role assignments
   * 
   * Retrieves the space role assignments.
   * 
   * Available as part of the [Role-Based Access Controls Beta](https://community.atlassian.com/forums/Confluence-articles/Beta-Simplify-space-access-in-Confluence-with-roles/ba-p/3044550). 
   * 
   * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
   * Permission to view the space.
   */
  'getSpaceRoleAssignments'(
    parameters?: Parameters<Paths.GetSpaceRoleAssignments.QueryParameters & Paths.GetSpaceRoleAssignments.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetSpaceRoleAssignments.Responses.$200>
  /**
   * setSpaceRoleAssignments - Set space role assignments
   * 
   * Sets space role assignments as specified in the payload.
   * 
   * Available as part of the [Role-Based Access Controls Beta](https://community.atlassian.com/forums/Confluence-articles/Beta-Simplify-space-access-in-Confluence-with-roles/ba-p/3044550). 
   * 
   * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
   * Permission to manage roles in the space.
   */
  'setSpaceRoleAssignments'(
    parameters?: Parameters<Paths.SetSpaceRoleAssignments.PathParameters> | null,
    data?: Paths.SetSpaceRoleAssignments.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.SetSpaceRoleAssignments.Responses.$200>
  /**
   * getPageFooterComments - Get footer comments for page
   * 
   * Returns the root footer comments of specific page. The number of results is limited by the `limit` parameter and additional results (if available)
   * will be available through the `next` URL present in the `Link` response header.
   * 
   * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
   * Permission to view the content of the page and its corresponding space.
   */
  'getPageFooterComments'(
    parameters?: Parameters<Paths.GetPageFooterComments.QueryParameters & Paths.GetPageFooterComments.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetPageFooterComments.Responses.$200>
  /**
   * getPageInlineComments - Get inline comments for page
   * 
   * Returns the root inline comments of specific page. The number of results is limited by the `limit` parameter and additional results (if available)
   * will be available through the `next` URL present in the `Link` response header.
   * 
   * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
   * Permission to view the content of the page and its corresponding space.
   */
  'getPageInlineComments'(
    parameters?: Parameters<Paths.GetPageInlineComments.QueryParameters & Paths.GetPageInlineComments.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetPageInlineComments.Responses.$200>
  /**
   * getBlogPostFooterComments - Get footer comments for blog post
   * 
   * Returns the root footer comments of specific blog post. The number of results is limited by the `limit` parameter and additional results (if available)
   * will be available through the `next` URL present in the `Link` response header.
   * 
   * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
   * Permission to view the content of the blog post and its corresponding space.
   */
  'getBlogPostFooterComments'(
    parameters?: Parameters<Paths.GetBlogPostFooterComments.QueryParameters & Paths.GetBlogPostFooterComments.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetBlogPostFooterComments.Responses.$200>
  /**
   * getBlogPostInlineComments - Get inline comments for blog post
   * 
   * Returns the root inline comments of specific blog post. The number of results is limited by the `limit` parameter and additional results (if available)
   * will be available through the `next` URL present in the `Link` response header.
   * 
   * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
   * Permission to view the content of the blog post and its corresponding space.
   */
  'getBlogPostInlineComments'(
    parameters?: Parameters<Paths.GetBlogPostInlineComments.QueryParameters & Paths.GetBlogPostInlineComments.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetBlogPostInlineComments.Responses.$200>
  /**
   * getFooterComments - Get footer comments
   * 
   * Returns all footer comments. The number of results is limited by the `limit` parameter and additional results (if available)
   * will be available through the `next` URL present in the `Link` response header.
   * 
   * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
   * Permission to view the content of the container and its corresponding space.
   */
  'getFooterComments'(
    parameters?: Parameters<Paths.GetFooterComments.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetFooterComments.Responses.$200>
  /**
   * createFooterComment - Create footer comment
   * 
   * Create a footer comment.
   * 
   * The footer comment can be made against several locations: 
   * - at the top level (specifying pageId or blogPostId in the request body)
   * - as a reply (specifying parentCommentId in the request body)
   * - against an attachment (note: this is different than the comments added via the attachment properties page on the UI, which are referred to as version comments)
   * - against a custom content
   * 
   * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
   * Permission to view the content of the page or blogpost and its corresponding space. Permission to create comments in the space.
   */
  'createFooterComment'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: Paths.CreateFooterComment.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.CreateFooterComment.Responses.$201>
  /**
   * getFooterCommentById - Get footer comment by id
   * 
   * Retrieves a footer comment by id
   * 
   * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
   * Permission to view the content of the container and its corresponding space.
   */
  'getFooterCommentById'(
    parameters?: Parameters<Paths.GetFooterCommentById.QueryParameters & Paths.GetFooterCommentById.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetFooterCommentById.Responses.$200>
  /**
   * updateFooterComment - Update footer comment
   * 
   * Update a footer comment. This can be used to update the body text of a comment.
   * 
   * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
   * Permission to view the content of the page or blogpost and its corresponding space. Permission to create comments in the space.
   */
  'updateFooterComment'(
    parameters?: Parameters<Paths.UpdateFooterComment.PathParameters> | null,
    data?: Paths.UpdateFooterComment.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.UpdateFooterComment.Responses.$200>
  /**
   * deleteFooterComment - Delete footer comment
   * 
   * Deletes a footer comment. This is a permanent deletion and cannot be reverted.
   * 
   * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
   * Permission to view the content of the page or blogpost and its corresponding space. Permission to delete comments in the space.
   */
  'deleteFooterComment'(
    parameters?: Parameters<Paths.DeleteFooterComment.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.DeleteFooterComment.Responses.$204>
  /**
   * getFooterCommentChildren - Get children footer comments
   * 
   * Returns the children footer comments of specific comment. The number of results is limited by the `limit` parameter and additional results (if available)
   * will be available through the `next` URL present in the `Link` response header.
   * 
   * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
   * Permission to view the content of the page and its corresponding space.
   */
  'getFooterCommentChildren'(
    parameters?: Parameters<Paths.GetFooterCommentChildren.QueryParameters & Paths.GetFooterCommentChildren.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetFooterCommentChildren.Responses.$200>
  /**
   * getFooterLikeCount - Get like count for footer comment
   * 
   * Returns the count of likes of specific footer comment.
   * 
   * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
   * Permission to view the content of the page/blogpost and its corresponding space.
   */
  'getFooterLikeCount'(
    parameters?: Parameters<Paths.GetFooterLikeCount.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetFooterLikeCount.Responses.$200>
  /**
   * getFooterLikeUsers - Get account IDs of likes for footer comment
   * 
   * Returns the account IDs of likes of specific footer comment.
   * 
   * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
   * Permission to view the content of the page/blogpost and its corresponding space.
   */
  'getFooterLikeUsers'(
    parameters?: Parameters<Paths.GetFooterLikeUsers.QueryParameters & Paths.GetFooterLikeUsers.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetFooterLikeUsers.Responses.$200>
  /**
   * getFooterCommentOperations - Get permitted operations for footer comment
   * 
   * Returns the permitted operations on specific footer comment.
   * 
   * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
   * Permission to view the parent content of the footer comment and its corresponding space.
   */
  'getFooterCommentOperations'(
    parameters?: Parameters<Paths.GetFooterCommentOperations.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetFooterCommentOperations.Responses.$200>
  /**
   * getFooterCommentVersions - Get footer comment versions
   * 
   * Retrieves the versions of the specified footer comment.
   * 
   * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
   * Permission to view the content of the page or blog post and its corresponding space.
   */
  'getFooterCommentVersions'(
    parameters?: Parameters<Paths.GetFooterCommentVersions.QueryParameters & Paths.GetFooterCommentVersions.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetFooterCommentVersions.Responses.$200>
  /**
   * getFooterCommentVersionDetails - Get version details for footer comment version
   * 
   * Retrieves version details for the specified footer comment version.
   * 
   * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
   * Permission to view the content of the page or blog post and its corresponding space.
   */
  'getFooterCommentVersionDetails'(
    parameters?: Parameters<Paths.GetFooterCommentVersionDetails.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetFooterCommentVersionDetails.Responses.$200>
  /**
   * getInlineComments - Get inline comments
   * 
   * Returns all inline comments. The number of results is limited by the `limit` parameter and additional results (if available)
   * will be available through the `next` URL present in the `Link` response header.
   * 
   * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
   * Permission to view the content of the page and its corresponding space.
   */
  'getInlineComments'(
    parameters?: Parameters<Paths.GetInlineComments.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetInlineComments.Responses.$200>
  /**
   * createInlineComment - Create inline comment
   * 
   * Create an inline comment. This can be at the top level (specifying pageId or blogPostId in the request body)
   * or as a reply (specifying parentCommentId in the request body). Note the inlineCommentProperties object in the
   * request body is used to select the text the inline comment should be tied to. This is what determines the text 
   * highlighting when viewing a page in Confluence.
   * 
   * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
   * Permission to view the content of the page or blogpost and its corresponding space. Permission to create comments in the space.
   */
  'createInlineComment'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: Paths.CreateInlineComment.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.CreateInlineComment.Responses.$201>
  /**
   * getInlineCommentById - Get inline comment by id
   * 
   * Retrieves an inline comment by id
   * 
   * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
   * Permission to view the content of the page or blogpost and its corresponding space.
   */
  'getInlineCommentById'(
    parameters?: Parameters<Paths.GetInlineCommentById.QueryParameters & Paths.GetInlineCommentById.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetInlineCommentById.Responses.$200>
  /**
   * updateInlineComment - Update inline comment
   * 
   * Update an inline comment. This can be used to update the body text of a comment and/or to resolve the comment
   * 
   * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
   * Permission to view the content of the page or blogpost and its corresponding space. Permission to create comments in the space.
   */
  'updateInlineComment'(
    parameters?: Parameters<Paths.UpdateInlineComment.PathParameters> | null,
    data?: Paths.UpdateInlineComment.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.UpdateInlineComment.Responses.$200>
  /**
   * deleteInlineComment - Delete inline comment
   * 
   * Deletes an inline comment. This is a permanent deletion and cannot be reverted.
   * 
   * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
   * Permission to view the content of the page or blogpost and its corresponding space. Permission to delete comments in the space.
   */
  'deleteInlineComment'(
    parameters?: Parameters<Paths.DeleteInlineComment.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.DeleteInlineComment.Responses.$204>
  /**
   * getInlineCommentChildren - Get children inline comments
   * 
   * Returns the children inline comments of specific comment. The number of results is limited by the `limit` parameter and additional results (if available)
   * will be available through the `next` URL present in the `Link` response header.
   * 
   * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
   * Permission to view the content of the page and its corresponding space.
   */
  'getInlineCommentChildren'(
    parameters?: Parameters<Paths.GetInlineCommentChildren.QueryParameters & Paths.GetInlineCommentChildren.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetInlineCommentChildren.Responses.$200>
  /**
   * getInlineLikeCount - Get like count for inline comment
   * 
   * Returns the count of likes of specific inline comment.
   * 
   * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
   * Permission to view the content of the page/blogpost and its corresponding space.
   */
  'getInlineLikeCount'(
    parameters?: Parameters<Paths.GetInlineLikeCount.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetInlineLikeCount.Responses.$200>
  /**
   * getInlineLikeUsers - Get account IDs of likes for inline comment
   * 
   * Returns the account IDs of likes of specific inline comment.
   * 
   * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
   * Permission to view the content of the page/blogpost and its corresponding space.
   */
  'getInlineLikeUsers'(
    parameters?: Parameters<Paths.GetInlineLikeUsers.QueryParameters & Paths.GetInlineLikeUsers.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetInlineLikeUsers.Responses.$200>
  /**
   * getInlineCommentOperations - Get permitted operations for inline comment
   * 
   * Returns the permitted operations on specific inline comment.
   * 
   * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
   * Permission to view the parent content of the inline comment and its corresponding space.
   */
  'getInlineCommentOperations'(
    parameters?: Parameters<Paths.GetInlineCommentOperations.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetInlineCommentOperations.Responses.$200>
  /**
   * getInlineCommentVersions - Get inline comment versions
   * 
   * Retrieves the versions of the specified inline comment.
   * 
   * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
   * Permission to view the content of the page or blog post and its corresponding space.
   */
  'getInlineCommentVersions'(
    parameters?: Parameters<Paths.GetInlineCommentVersions.QueryParameters & Paths.GetInlineCommentVersions.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetInlineCommentVersions.Responses.$200>
  /**
   * getInlineCommentVersionDetails - Get version details for inline comment version
   * 
   * Retrieves version details for the specified inline comment version.
   * 
   * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
   * Permission to view the content of the page or blog post and its corresponding space.
   */
  'getInlineCommentVersionDetails'(
    parameters?: Parameters<Paths.GetInlineCommentVersionDetails.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetInlineCommentVersionDetails.Responses.$200>
  /**
   * getCommentContentProperties - Get content properties for comment
   * 
   * Retrieves Content Properties attached to a specified comment.
   * 
   * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
   * Permission to view the comment.
   */
  'getCommentContentProperties'(
    parameters?: Parameters<Paths.GetCommentContentProperties.QueryParameters & Paths.GetCommentContentProperties.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetCommentContentProperties.Responses.$200>
  /**
   * createCommentProperty - Create content property for comment
   * 
   * Creates a new content property for a comment.
   * 
   * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
   * Permission to update the comment.
   */
  'createCommentProperty'(
    parameters?: Parameters<Paths.CreateCommentProperty.PathParameters> | null,
    data?: Paths.CreateCommentProperty.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.CreateCommentProperty.Responses.$200>
  /**
   * getCommentContentPropertiesById - Get content property for comment by id
   * 
   * Retrieves a specific Content Property by ID that is attached to a specified comment.
   * 
   * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
   * Permission to view the comment.
   */
  'getCommentContentPropertiesById'(
    parameters?: Parameters<Paths.GetCommentContentPropertiesById.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetCommentContentPropertiesById.Responses.$200>
  /**
   * updateCommentPropertyById - Update content property for comment by id
   * 
   * Update a content property for a comment by its id. 
   * 
   * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
   * Permission to edit the comment.
   */
  'updateCommentPropertyById'(
    parameters?: Parameters<Paths.UpdateCommentPropertyById.PathParameters> | null,
    data?: Paths.UpdateCommentPropertyById.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.UpdateCommentPropertyById.Responses.$200>
  /**
   * deleteCommentPropertyById - Delete content property for comment by id
   * 
   * Deletes a content property for a comment by its id. 
   * 
   * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
   * Permission to edit the comment.
   */
  'deleteCommentPropertyById'(
    parameters?: Parameters<Paths.DeleteCommentPropertyById.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.DeleteCommentPropertyById.Responses.$204>
  /**
   * getTasks - Get tasks
   * 
   * Returns all tasks. The number of results is limited by the `limit` parameter and additional results (if available)
   * will be available through the `next` URL present in the `Link` response header.
   * 
   * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
   * Permission to access the Confluence site ('Can use' global permission).
   * Only tasks that the user has permission to view will be returned.
   */
  'getTasks'(
    parameters?: Parameters<Paths.GetTasks.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetTasks.Responses.$200>
  /**
   * getTaskById - Get task by id
   * 
   * Returns a specific task. 
   * 
   * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
   * Permission to view the containing page or blog post and its corresponding space.
   */
  'getTaskById'(
    parameters?: Parameters<Paths.GetTaskById.QueryParameters & Paths.GetTaskById.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetTaskById.Responses.$200>
  /**
   * updateTask - Update task
   * 
   * Update a task by id. This endpoint currently only supports updating task status.
   * 
   * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
   * Permission to edit the containing page or blog post and view its corresponding space.
   */
  'updateTask'(
    parameters?: Parameters<Paths.UpdateTask.QueryParameters & Paths.UpdateTask.PathParameters> | null,
    data?: Paths.UpdateTask.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.UpdateTask.Responses.$200>
  /**
   * getChildPages - Get child pages
   * 
   * Returns all child pages for given page id. The number of results is limited by the `limit` parameter and additional results (if available)
   * will be available through the `next` URL present in the `Link` response header.
   * 
   * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
   * Permission to access the Confluence site ('Can use' global permission).
   * Only pages that the user has permission to view will be returned.
   */
  'getChildPages'(
    parameters?: Parameters<Paths.GetChildPages.QueryParameters & Paths.GetChildPages.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetChildPages.Responses.$200>
  /**
   * getChildCustomContent - Get child custom content
   * 
   * Returns all child custom content for given custom content id. The number of results is limited by the `limit` parameter and additional results (if available)
   * will be available through the `next` URL present in the `Link` response header.
   * 
   * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
   * Permission to access the Confluence site ('Can use' global permission).
   * Only custom content that the user has permission to view will be returned.
   */
  'getChildCustomContent'(
    parameters?: Parameters<Paths.GetChildCustomContent.QueryParameters & Paths.GetChildCustomContent.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetChildCustomContent.Responses.$200>
  /**
   * getPageDirectChildren - Get direct children of a page
   * 
   * Returns all children for given page id in the content tree. The number of results is limited by the `limit` parameter and additional results (if available)
   * will be available through the `next` URL present in the `Link` response header.
   * 
   * The following types of content will be returned:
   * - Database
   * - Embed
   * - Folder
   * - Page
   * - Whiteboard
   * 
   * This endpoint returns minimal information about each child. To fetch more details, use a related endpoint based on the content type, such
   * as:
   * 
   * - [Get database by id](https://developer.atlassian.com/cloud/confluence/rest/v2/api-group-database/#api-databases-id-get)
   * - [Get embed by id](https://developer.atlassian.com/cloud/confluence/rest/v2/api-group-smart-link/#api-embeds-id-get)
   * - [Get folder by id](https://developer.atlassian.com/cloud/confluence/rest/v2/api-group-folder/#api-folders-id-get)
   * - [Get page by id](https://developer.atlassian.com/cloud/confluence/rest/v2/api-group-page/#api-pages-id-get)
   * - [Get whiteboard by id](https://developer.atlassian.com/cloud/confluence/rest/v2/api-group-whiteboard/#api-whiteboards-id-get).
   * 
   * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
   * Permission to access the Confluence site ('Can use' global permission).
   * Only content that the user has permission to view will be returned.
   */
  'getPageDirectChildren'(
    parameters?: Parameters<Paths.GetPageDirectChildren.QueryParameters & Paths.GetPageDirectChildren.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetPageDirectChildren.Responses.$200>
  /**
   * getPageAncestors - Get all ancestors of page
   * 
   * Returns all ancestors for a given page by ID in top-to-bottom order (that is, the highest ancestor is the first
   * item in the response payload). The number of results is limited by the `limit` parameter and additional results (if available)
   * will be available by calling this endpoint with the ID of first ancestor in the response payload.
   * 
   * This endpoint returns minimal information about each ancestor. To fetch more details, use a related endpoint, such
   * as [Get page by id](https://developer.atlassian.com/cloud/confluence/rest/v2/api-group-page/#api-pages-id-get).
   * 
   * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
   * Permission to access the Confluence site ('Can use' global permission).
   */
  'getPageAncestors'(
    parameters?: Parameters<Paths.GetPageAncestors.QueryParameters & Paths.GetPageAncestors.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetPageAncestors.Responses.$200>
  /**
   * getPageDescendants - Get descendants of page
   * 
   * Returns descendants in the content tree for a given page by ID in top-to-bottom order (that is, the highest descendant is the first
   * item in the response payload). The number of results is limited by the `limit` parameter and additional results (if available)
   * will be available by calling this endpoint with the cursor in the response payload. There is also a `depth` parameter specifying depth
   * of descendants to be fetched.
   * 
   * The following types of content will be returned:
   * - Database
   * - Embed
   * - Folder
   * - Page
   * - Whiteboard
   * 
   * This endpoint returns minimal information about each descendant. To fetch more details, use a related endpoint based on the content type, such
   * as:
   * 
   * - [Get database by id](https://developer.atlassian.com/cloud/confluence/rest/v2/api-group-database/#api-databases-id-get)
   * - [Get embed by id](https://developer.atlassian.com/cloud/confluence/rest/v2/api-group-smart-link/#api-embeds-id-get)
   * - [Get folder by id](https://developer.atlassian.com/cloud/confluence/rest/v2/api-group-folder/#api-folders-id-get)
   * - [Get page by id](https://developer.atlassian.com/cloud/confluence/rest/v2/api-group-page/#api-pages-id-get)
   * - [Get whiteboard by id](https://developer.atlassian.com/cloud/confluence/rest/v2/api-group-whiteboard/#api-whiteboards-id-get).
   * 
   * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
   * Permission to access the Confluence site ('Can use' global permission).
   * Permission to view the page and its corresponding space
   */
  'getPageDescendants'(
    parameters?: Parameters<Paths.GetPageDescendants.QueryParameters & Paths.GetPageDescendants.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetPageDescendants.Responses.$200>
  /**
   * createBulkUserLookup - Create bulk user lookup using ids
   * 
   * Returns user details for the ids provided in the request body.
   * 
   * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
   * Permission to access the Confluence site ('Can use' global permission).
   * The user must be able to view user profiles in the Confluence site.
   */
  'createBulkUserLookup'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: Paths.CreateBulkUserLookup.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.CreateBulkUserLookup.Responses.$200>
  /**
   * checkAccessByEmail - Check site access for a list of emails
   * 
   * Returns the list of emails from the input list that do not have access to site.
   * 
   * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
   * Permission to access the Confluence site ('Can use' global permission).
   */
  'checkAccessByEmail'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: Paths.CheckAccessByEmail.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.CheckAccessByEmail.Responses.$200>
  /**
   * inviteByEmail - Invite a list of emails to the site
   * 
   * Invite a list of emails to the site.
   * 
   * Ignores all invalid emails and no action is taken for the emails that already have access to the site.
   * 
   * <b>NOTE:</b> This API is asynchronous and may take some time to complete.
   * 
   * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
   * Permission to access the Confluence site ('Can use' global permission).
   */
  'inviteByEmail'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: Paths.InviteByEmail.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<any>
  /**
   * getDataPolicyMetadata - Get data policy metadata for the workspace
   * 
   * Returns data policy metadata for the workspace.
   * 
   * **[Permissions](#permissions) required:**
   * Only apps can make this request.
   * Permission to access the Confluence site ('Can use' global permission).
   */
  'getDataPolicyMetadata'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetDataPolicyMetadata.Responses.$200>
  /**
   * getDataPolicySpaces - Get spaces with data policies
   * 
   * Returns all spaces. The results will be sorted by id ascending. The number of results is limited by the `limit` parameter and
   * additional results (if available) will be available through the `next` URL present in the `Link` response header.
   * 
   * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
   * Only apps can make this request.
   * Permission to access the Confluence site ('Can use' global permission).
   * Only spaces that the app has permission to view will be returned.
   */
  'getDataPolicySpaces'(
    parameters?: Parameters<Paths.GetDataPolicySpaces.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetDataPolicySpaces.Responses.$200>
  /**
   * getClassificationLevels - Get list of classification levels
   * 
   * Returns a list of [classification levels](https://developer.atlassian.com/cloud/admin/dlp/rest/intro/#Classification%20level) 
   * available.
   * 
   * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
   * 'Permission to access the Confluence site ('Can use' global permission).
   */
  'getClassificationLevels'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetClassificationLevels.Responses.$200>
  /**
   * getSpaceDefaultClassificationLevel - Get space default classification level
   * 
   * Returns the [default classification level](https://support.atlassian.com/security-and-access-policies/docs/what-is-a-default-classification-level/) 
   * for a specific space.
   * 
   * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
   * 'Permission to access the Confluence site ('Can use' global permission) and permission to view the space.
   */
  'getSpaceDefaultClassificationLevel'(
    parameters?: Parameters<Paths.GetSpaceDefaultClassificationLevel.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetSpaceDefaultClassificationLevel.Responses.$200>
  /**
   * putSpaceDefaultClassificationLevel - Update space default classification level
   * 
   * Update the [default classification level](https://support.atlassian.com/security-and-access-policies/docs/what-is-a-default-classification-level/) 
   * for a specific space.
   * 
   * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
   * 'Permission to access the Confluence site ('Can use' global permission) and 'Admin' permission for the space.
   */
  'putSpaceDefaultClassificationLevel'(
    parameters?: Parameters<Paths.PutSpaceDefaultClassificationLevel.PathParameters> | null,
    data?: Paths.PutSpaceDefaultClassificationLevel.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<any>
  /**
   * deleteSpaceDefaultClassificationLevel - Delete space default classification level
   * 
   * Returns the [default classification level](https://support.atlassian.com/security-and-access-policies/docs/what-is-a-default-classification-level/) 
   * for a specific space.
   * 
   * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
   * 'Permission to access the Confluence site ('Can use' global permission) and 'Admin' permission for the space.
   */
  'deleteSpaceDefaultClassificationLevel'(
    parameters?: Parameters<Paths.DeleteSpaceDefaultClassificationLevel.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<any>
  /**
   * getPageClassificationLevel - Get page classification level
   * 
   * Returns the [classification level](https://developer.atlassian.com/cloud/admin/dlp/rest/intro/#Classification%20level)
   * for a specific page.
   * 
   * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
   * 'Permission to access the Confluence site ('Can use' global permission) and permission to view the page.
   * 'Permission to edit the page is required if trying to view classification level for a draft.
   */
  'getPageClassificationLevel'(
    parameters?: Parameters<Paths.GetPageClassificationLevel.QueryParameters & Paths.GetPageClassificationLevel.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetPageClassificationLevel.Responses.$200>
  /**
   * putPageClassificationLevel - Update page classification level
   * 
   * Updates the [classification level](https://developer.atlassian.com/cloud/admin/dlp/rest/intro/#Classification%20level)
   * for a specific page.
   * 
   * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
   * 'Permission to access the Confluence site ('Can use' global permission) and permission to edit the page.
   */
  'putPageClassificationLevel'(
    parameters?: Parameters<Paths.PutPageClassificationLevel.PathParameters> | null,
    data?: Paths.PutPageClassificationLevel.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.PutPageClassificationLevel.Responses.$204>
  /**
   * postPageClassificationLevel - Reset page classification level
   * 
   * Resets the [classification level](https://developer.atlassian.com/cloud/admin/dlp/rest/intro/#Classification%20level)
   * for a specific page for the space 
   * [default classification level](https://support.atlassian.com/security-and-access-policies/docs/what-is-a-default-classification-level/).
   * 
   * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
   * 'Permission to access the Confluence site ('Can use' global permission) and permission to view the page.
   */
  'postPageClassificationLevel'(
    parameters?: Parameters<Paths.PostPageClassificationLevel.PathParameters> | null,
    data?: Paths.PostPageClassificationLevel.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.PostPageClassificationLevel.Responses.$204>
  /**
   * getBlogPostClassificationLevel - Get blog post classification level
   * 
   * Returns the [classification level](https://developer.atlassian.com/cloud/admin/dlp/rest/intro/#Classification%20level)
   * for a specific blog post.
   * 
   * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
   * 'Permission to access the Confluence site ('Can use' global permission) and permission to view the blog post.
   * 'Permission to edit the blog post is required if trying to view classification level for a draft.
   */
  'getBlogPostClassificationLevel'(
    parameters?: Parameters<Paths.GetBlogPostClassificationLevel.QueryParameters & Paths.GetBlogPostClassificationLevel.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetBlogPostClassificationLevel.Responses.$200>
  /**
   * putBlogPostClassificationLevel - Update blog post classification level
   * 
   * Updates the [classification level](https://developer.atlassian.com/cloud/admin/dlp/rest/intro/#Classification%20level)
   * for a specific blog post.
   * 
   * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
   * 'Permission to access the Confluence site ('Can use' global permission) and permission to edit the blog post.
   */
  'putBlogPostClassificationLevel'(
    parameters?: Parameters<Paths.PutBlogPostClassificationLevel.PathParameters> | null,
    data?: Paths.PutBlogPostClassificationLevel.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.PutBlogPostClassificationLevel.Responses.$204>
  /**
   * postBlogPostClassificationLevel - Reset blog post classification level
   * 
   * Resets the [classification level](https://developer.atlassian.com/cloud/admin/dlp/rest/intro/#Classification%20level)
   * for a specific blog post for the space  
   * [default classification level](https://support.atlassian.com/security-and-access-policies/docs/what-is-a-default-classification-level/).
   * 
   * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
   * 'Permission to access the Confluence site ('Can use' global permission) and permission to view the blog post.
   */
  'postBlogPostClassificationLevel'(
    parameters?: Parameters<Paths.PostBlogPostClassificationLevel.PathParameters> | null,
    data?: Paths.PostBlogPostClassificationLevel.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.PostBlogPostClassificationLevel.Responses.$204>
  /**
   * getWhiteboardClassificationLevel - Get whiteboard classification level
   * 
   * Returns the [classification level](https://developer.atlassian.com/cloud/admin/dlp/rest/intro/#Classification%20level)
   * for a specific whiteboard.
   * 
   * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
   * 'Permission to access the Confluence site ('Can use' global permission) and permission to view the whiteboard.
   */
  'getWhiteboardClassificationLevel'(
    parameters?: Parameters<Paths.GetWhiteboardClassificationLevel.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetWhiteboardClassificationLevel.Responses.$200>
  /**
   * putWhiteboardClassificationLevel - Update whiteboard classification level
   * 
   * Updates the [classification level](https://developer.atlassian.com/cloud/admin/dlp/rest/intro/#Classification%20level)
   * for a specific whiteboard.
   * 
   * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
   * 'Permission to access the Confluence site ('Can use' global permission) and permission to edit the whiteboard.
   */
  'putWhiteboardClassificationLevel'(
    parameters?: Parameters<Paths.PutWhiteboardClassificationLevel.PathParameters> | null,
    data?: Paths.PutWhiteboardClassificationLevel.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.PutWhiteboardClassificationLevel.Responses.$204>
  /**
   * postWhiteboardClassificationLevel - Reset whiteboard classification level
   * 
   * Resets the [classification level](https://developer.atlassian.com/cloud/admin/dlp/rest/intro/#Classification%20level)
   * for a specific whiteboard for the space 
   * [default classification level](https://support.atlassian.com/security-and-access-policies/docs/what-is-a-default-classification-level/).
   * 
   * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
   * 'Permission to access the Confluence site ('Can use' global permission) and permission to view the whiteboard.
   */
  'postWhiteboardClassificationLevel'(
    parameters?: Parameters<Paths.PostWhiteboardClassificationLevel.PathParameters> | null,
    data?: Paths.PostWhiteboardClassificationLevel.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.PostWhiteboardClassificationLevel.Responses.$204>
  /**
   * getDatabaseClassificationLevel - Get database classification level
   * 
   * Returns the [classification level](https://developer.atlassian.com/cloud/admin/dlp/rest/intro/#Classification%20level)
   * for a specific database.
   * 
   * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
   * 'Permission to access the Confluence site ('Can use' global permission) and permission to view the database.
   */
  'getDatabaseClassificationLevel'(
    parameters?: Parameters<Paths.GetDatabaseClassificationLevel.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetDatabaseClassificationLevel.Responses.$200>
  /**
   * putDatabaseClassificationLevel - Update database classification level
   * 
   * Updates the [classification level](https://developer.atlassian.com/cloud/admin/dlp/rest/intro/#Classification%20level)
   * for a specific database.
   * 
   * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
   * 'Permission to access the Confluence site ('Can use' global permission) and permission to edit the database.
   */
  'putDatabaseClassificationLevel'(
    parameters?: Parameters<Paths.PutDatabaseClassificationLevel.PathParameters> | null,
    data?: Paths.PutDatabaseClassificationLevel.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.PutDatabaseClassificationLevel.Responses.$204>
  /**
   * postDatabaseClassificationLevel - Reset database classification level
   * 
   * Resets the [classification level](https://developer.atlassian.com/cloud/admin/dlp/rest/intro/#Classification%20level)
   * for a specific database for the space 
   * [default classification level](https://support.atlassian.com/security-and-access-policies/docs/what-is-a-default-classification-level/).
   * 
   * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
   * 'Permission to access the Confluence site ('Can use' global permission) and permission to view the database.
   */
  'postDatabaseClassificationLevel'(
    parameters?: Parameters<Paths.PostDatabaseClassificationLevel.PathParameters> | null,
    data?: Paths.PostDatabaseClassificationLevel.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.PostDatabaseClassificationLevel.Responses.$204>
  /**
   * getForgeAppProperties - Get Forge app properties.
   * 
   * Gets Forge app properties. This API can only be accessed using **[asApp()](https://developer.atlassian.com/platform/forge/apis-reference/fetch-api-product.requestconfluence/#method-signature)** requests from Forge.
   */
  'getForgeAppProperties'(
    parameters?: Parameters<Paths.GetForgeAppProperties.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetForgeAppProperties.Responses.$200>
  /**
   * getForgeAppProperty - Get a Forge app property by key.
   * 
   * Gets a Forge app property by property key. This API can only be accessed using **[asApp()](https://developer.atlassian.com/platform/forge/apis-reference/fetch-api-product.requestconfluence/#method-signature)** requests from Forge.
   */
  'getForgeAppProperty'(
    parameters?: Parameters<Paths.GetForgeAppProperty.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetForgeAppProperty.Responses.$200>
  /**
   * putForgeAppProperty - Create or update a Forge app property.
   * 
   * Creates or updates a Forge app property. This API can only be accessed using **[asApp()](https://developer.atlassian.com/platform/forge/apis-reference/fetch-api-product.requestconfluence/#method-signature)** requests from Forge.
   */
  'putForgeAppProperty'(
    parameters?: Parameters<Paths.PutForgeAppProperty.PathParameters> | null,
    data?: Paths.PutForgeAppProperty.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.PutForgeAppProperty.Responses.$200 | Paths.PutForgeAppProperty.Responses.$201>
  /**
   * deleteForgeAppProperty - Deletes a Forge app property.
   * 
   * Deletes a Forge app property. This API can only be accessed using **[asApp()](https://developer.atlassian.com/platform/forge/apis-reference/fetch-api-product.requestconfluence/#method-signature)** requests from Forge.
   */
  'deleteForgeAppProperty'(
    parameters?: Parameters<Paths.DeleteForgeAppProperty.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.DeleteForgeAppProperty.Responses.$204>
}

export interface PathsDictionary {
  ['/admin-key']: {
    /**
     * getAdminKey - Get Admin Key
     * 
     * Returns information about the admin key if one is currently enabled for the calling user within the site.
     * 
     * **[Permissions](https://support.atlassian.com/user-management/docs/give-users-admin-permissions/#Centralized-user-management-content) required**:
     * User must be an organization or site admin.
     */
    'get'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetAdminKey.Responses.$200>
    /**
     * enableAdminKey - Enable Admin Key
     * 
     * Enables admin key access for the calling user within the site. If an admin key already exists for the user, a new one will be issued with an updated expiration time.
     * 
     * **Note:** The `durationInMinutes` field within the request body is optional. If the request body is empty or if the `durationInMinutes` is set to 0 minutes, a new admin key will be issued to the calling user with a default duration of 10 minutes.
     * 
     * **[Permissions](https://support.atlassian.com/user-management/docs/give-users-admin-permissions/#Centralized-user-management-content) required**:
     * User must be an organization or site admin.
     */
    'post'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.EnableAdminKey.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.EnableAdminKey.Responses.$200>
    /**
     * disableAdminKey - Disable Admin Key
     * 
     * Disables admin key access for the calling user within the site.
     * 
     * **[Permissions](https://support.atlassian.com/user-management/docs/give-users-admin-permissions/#Centralized-user-management-content) required**:
     * User must be an organization or site admin.
     */
    'delete'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<any>
  }
  ['/attachments']: {
    /**
     * getAttachments - Get attachments
     * 
     * Returns all attachments. The number of results is limited by the `limit` parameter and additional results (if available)
     * will be available through the `next` URL present in the `Link` response header.
     * 
     * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
     * Permission to view the container of the attachment.
     */
    'get'(
      parameters?: Parameters<Paths.GetAttachments.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetAttachments.Responses.$200>
  }
  ['/attachments/{id}']: {
    /**
     * getAttachmentById - Get attachment by id
     * 
     * Returns a specific attachment.
     * 
     * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
     * Permission to view the attachment's container.
     */
    'get'(
      parameters?: Parameters<Paths.GetAttachmentById.QueryParameters & Paths.GetAttachmentById.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetAttachmentById.Responses.$200>
    /**
     * deleteAttachment - Delete attachment
     * 
     * Delete an attachment by id.
     * 
     * Deleting an attachment moves the attachment to the trash, where it can be restored later. To permanently delete an attachment (or "purge" it),
     * the endpoint must be called on a **trashed** attachment with the following param `purge=true`.
     * 
     * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
     * Permission to view the container of the attachment.
     * Permission to delete attachments in the space.
     * Permission to administer the space (if attempting to purge).
     */
    'delete'(
      parameters?: Parameters<Paths.DeleteAttachment.QueryParameters & Paths.DeleteAttachment.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<any>
  }
  ['/attachments/{id}/labels']: {
    /**
     * getAttachmentLabels - Get labels for attachment
     * 
     * Returns the labels of specific attachment. The number of results is limited by the `limit` parameter and additional results (if available)
     * will be available through the `next` URL present in the `Link` response header.
     * 
     * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
     * Permission to view the parent content of the attachment and its corresponding space.
     * Only labels that the user has permission to view will be returned.
     */
    'get'(
      parameters?: Parameters<Paths.GetAttachmentLabels.QueryParameters & Paths.GetAttachmentLabels.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetAttachmentLabels.Responses.$200>
  }
  ['/attachments/{id}/operations']: {
    /**
     * getAttachmentOperations - Get permitted operations for attachment
     * 
     * Returns the permitted operations on specific attachment.
     * 
     * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
     * Permission to view the parent content of the attachment and its corresponding space.
     */
    'get'(
      parameters?: Parameters<Paths.GetAttachmentOperations.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetAttachmentOperations.Responses.$200>
  }
  ['/attachments/{attachment-id}/properties']: {
    /**
     * getAttachmentContentProperties - Get content properties for attachment
     * 
     * Retrieves all Content Properties tied to a specified attachment.
     * 
     * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
     * Permission to view the attachment.
     */
    'get'(
      parameters?: Parameters<Paths.GetAttachmentContentProperties.QueryParameters & Paths.GetAttachmentContentProperties.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetAttachmentContentProperties.Responses.$200>
    /**
     * createAttachmentProperty - Create content property for attachment
     * 
     * Creates a new content property for an attachment.
     * 
     * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
     * Permission to update the attachment.
     */
    'post'(
      parameters?: Parameters<Paths.CreateAttachmentProperty.PathParameters> | null,
      data?: Paths.CreateAttachmentProperty.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.CreateAttachmentProperty.Responses.$200>
  }
  ['/attachments/{attachment-id}/properties/{property-id}']: {
    /**
     * getAttachmentContentPropertiesById - Get content property for attachment by id
     * 
     * Retrieves a specific Content Property by ID that is attached to a specified attachment.
     * 
     * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
     * Permission to view the attachment.
     */
    'get'(
      parameters?: Parameters<Paths.GetAttachmentContentPropertiesById.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetAttachmentContentPropertiesById.Responses.$200>
    /**
     * updateAttachmentPropertyById - Update content property for attachment by id
     * 
     * Update a content property for attachment by its id. 
     * 
     * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
     * Permission to edit the attachment.
     */
    'put'(
      parameters?: Parameters<Paths.UpdateAttachmentPropertyById.PathParameters> | null,
      data?: Paths.UpdateAttachmentPropertyById.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.UpdateAttachmentPropertyById.Responses.$200>
    /**
     * deleteAttachmentPropertyById - Delete content property for attachment by id
     * 
     * Deletes a content property for an attachment by its id. 
     * 
     * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
     * Permission to attachment the page.
     */
    'delete'(
      parameters?: Parameters<Paths.DeleteAttachmentPropertyById.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.DeleteAttachmentPropertyById.Responses.$204>
  }
  ['/attachments/{id}/versions']: {
    /**
     * getAttachmentVersions - Get attachment versions
     * 
     * Returns the versions of specific attachment.
     * 
     * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
     * Permission to view the attachment and its corresponding space.
     */
    'get'(
      parameters?: Parameters<Paths.GetAttachmentVersions.QueryParameters & Paths.GetAttachmentVersions.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetAttachmentVersions.Responses.$200>
  }
  ['/attachments/{attachment-id}/versions/{version-number}']: {
    /**
     * getAttachmentVersionDetails - Get version details for attachment version
     * 
     * Retrieves version details for the specified attachment and version number.
     * 
     * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
     * Permission to view the attachment.
     */
    'get'(
      parameters?: Parameters<Paths.GetAttachmentVersionDetails.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetAttachmentVersionDetails.Responses.$200>
  }
  ['/attachments/{id}/footer-comments']: {
    /**
     * getAttachmentComments - Get attachment comments
     * 
     * Returns the comments of the specific attachment.
     * The number of results is limited by the `limit` parameter and additional results (if available) will be available through
     * the `next` URL present in the `Link` response header.
     * 
     * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
     * Permission to view the attachment and its corresponding containers.
     */
    'get'(
      parameters?: Parameters<Paths.GetAttachmentComments.QueryParameters & Paths.GetAttachmentComments.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetAttachmentComments.Responses.$200>
  }
  ['/blogposts']: {
    /**
     * getBlogPosts - Get blog posts
     * 
     * Returns all blog posts. The number of results is limited by the `limit` parameter and additional results (if available)
     * will be available through the `next` URL present in the `Link` response header.
     * 
     * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
     * Permission to access the Confluence site ('Can use' global permission).
     * Only blog posts that the user has permission to view will be returned.
     */
    'get'(
      parameters?: Parameters<Paths.GetBlogPosts.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetBlogPosts.Responses.$200>
    /**
     * createBlogPost - Create blog post
     * 
     * Creates a new blog post in the space specified by the spaceId.
     * 
     * By default this will create the blog post as a non-draft, unless the status is specified as draft.
     * If creating a non-draft, the title must not be empty.
     * 
     * Currently only supports the storage representation specified in the body.representation enums below
     */
    'post'(
      parameters?: Parameters<Paths.CreateBlogPost.QueryParameters> | null,
      data?: Paths.CreateBlogPost.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.CreateBlogPost.Responses.$200>
  }
  ['/blogposts/{id}']: {
    /**
     * getBlogPostById - Get blog post by id
     * 
     * Returns a specific blog post.
     * 
     * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
     * Permission to view the blog post and its corresponding space.
     */
    'get'(
      parameters?: Parameters<Paths.GetBlogPostById.QueryParameters & Paths.GetBlogPostById.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetBlogPostById.Responses.$200>
    /**
     * updateBlogPost - Update blog post
     * 
     * Update a blog post by id.
     * 
     * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
     * Permission to view the blog post and its corresponding space. Permission to update blog posts in the space.
     */
    'put'(
      parameters?: Parameters<Paths.UpdateBlogPost.PathParameters> | null,
      data?: Paths.UpdateBlogPost.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.UpdateBlogPost.Responses.$200>
    /**
     * deleteBlogPost - Delete blog post
     * 
     * Delete a blog post by id.
     * 
     * By default this will delete blog posts that are non-drafts. To delete a blog post that is a draft, the endpoint must be called on a 
     * draft with the following param `draft=true`. Discarded drafts are not sent to the trash and are permanently deleted.
     * 
     * Deleting a blog post that is not a draft moves the blog post to the trash, where it can be restored later.
     * To permanently delete a blog post (or "purge" it), the endpoint must be called on a **trashed** blog post with the following param `purge=true`.
     * 
     * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
     * Permission to view the blog post and its corresponding space.
     * Permission to delete blog posts in the space.
     * Permission to administer the space (if attempting to purge).
     */
    'delete'(
      parameters?: Parameters<Paths.DeleteBlogPost.QueryParameters & Paths.DeleteBlogPost.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<any>
  }
  ['/blogposts/{id}/attachments']: {
    /**
     * getBlogpostAttachments - Get attachments for blog post
     * 
     * Returns the attachments of specific blog post. The number of results is limited by the `limit` parameter and additional results (if available)
     * will be available through the `next` URL present in the `Link` response header.
     * 
     * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
     * Permission to view the content of the blog post and its corresponding space.
     */
    'get'(
      parameters?: Parameters<Paths.GetBlogpostAttachments.QueryParameters & Paths.GetBlogpostAttachments.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetBlogpostAttachments.Responses.$200>
  }
  ['/blogposts/{id}/custom-content']: {
    /**
     * getCustomContentByTypeInBlogPost - Get custom content by type in blog post
     * 
     * Returns all custom content for a given type within a given blogpost. The number of results is limited by the `limit` parameter and additional results (if available)
     * will be available through the `next` URL present in the `Link` response header.
     * 
     * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
     * Permission to view the custom content, the container of the custom content (blog post), and the corresponding space.
     */
    'get'(
      parameters?: Parameters<Paths.GetCustomContentByTypeInBlogPost.QueryParameters & Paths.GetCustomContentByTypeInBlogPost.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetCustomContentByTypeInBlogPost.Responses.$200>
  }
  ['/blogposts/{id}/labels']: {
    /**
     * getBlogPostLabels - Get labels for blog post
     * 
     * Returns the labels of specific blog post. The number of results is limited by the `limit` parameter and additional results (if available)
     * will be available through the `next` URL present in the `Link` response header.
     * 
     * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
     * Permission to view the content of the blog post and its corresponding space.
     * Only labels that the user has permission to view will be returned.
     */
    'get'(
      parameters?: Parameters<Paths.GetBlogPostLabels.QueryParameters & Paths.GetBlogPostLabels.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetBlogPostLabels.Responses.$200>
  }
  ['/blogposts/{id}/likes/count']: {
    /**
     * getBlogPostLikeCount - Get like count for blog post
     * 
     * Returns the count of likes of specific blog post.
     * 
     * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
     * Permission to view the content of the blog post and its corresponding space.
     */
    'get'(
      parameters?: Parameters<Paths.GetBlogPostLikeCount.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetBlogPostLikeCount.Responses.$200>
  }
  ['/blogposts/{id}/likes/users']: {
    /**
     * getBlogPostLikeUsers - Get account IDs of likes for blog post
     * 
     * Returns the account IDs of likes of specific blog post.
     * 
     * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
     * Permission to view the content of the blog post and its corresponding space.
     */
    'get'(
      parameters?: Parameters<Paths.GetBlogPostLikeUsers.QueryParameters & Paths.GetBlogPostLikeUsers.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetBlogPostLikeUsers.Responses.$200>
  }
  ['/blogposts/{blogpost-id}/properties']: {
    /**
     * getBlogpostContentProperties - Get content properties for blog post
     * 
     * Retrieves all Content Properties tied to a specified blog post.
     * 
     * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
     * Permission to view the blog post.
     */
    'get'(
      parameters?: Parameters<Paths.GetBlogpostContentProperties.QueryParameters & Paths.GetBlogpostContentProperties.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetBlogpostContentProperties.Responses.$200>
    /**
     * createBlogpostProperty - Create content property for blog post
     * 
     * Creates a new property for a blogpost.
     * 
     * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
     * Permission to update the blog post.
     */
    'post'(
      parameters?: Parameters<Paths.CreateBlogpostProperty.PathParameters> | null,
      data?: Paths.CreateBlogpostProperty.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.CreateBlogpostProperty.Responses.$200>
  }
  ['/blogposts/{blogpost-id}/properties/{property-id}']: {
    /**
     * getBlogpostContentPropertiesById - Get content property for blog post by id
     * 
     * Retrieves a specific Content Property by ID that is attached to a specified blog post.
     * 
     * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
     * Permission to view the blog post.
     */
    'get'(
      parameters?: Parameters<Paths.GetBlogpostContentPropertiesById.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetBlogpostContentPropertiesById.Responses.$200>
    /**
     * updateBlogpostPropertyById - Update content property for blog post by id
     * 
     * Update a content property for blog post by its id. 
     * 
     * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
     * Permission to edit the blog post.
     */
    'put'(
      parameters?: Parameters<Paths.UpdateBlogpostPropertyById.PathParameters> | null,
      data?: Paths.UpdateBlogpostPropertyById.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.UpdateBlogpostPropertyById.Responses.$200>
    /**
     * deleteBlogpostPropertyById - Delete content property for blogpost by id
     * 
     * Deletes a content property for a blogpost by its id. 
     * 
     * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
     * Permission to edit the blog post.
     */
    'delete'(
      parameters?: Parameters<Paths.DeleteBlogpostPropertyById.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.DeleteBlogpostPropertyById.Responses.$204>
  }
  ['/blogposts/{id}/operations']: {
    /**
     * getBlogPostOperations - Get permitted operations for blog post
     * 
     * Returns the permitted operations on specific blog post.
     * 
     * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
     * Permission to view the parent content of the blog post and its corresponding space.
     */
    'get'(
      parameters?: Parameters<Paths.GetBlogPostOperations.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetBlogPostOperations.Responses.$200>
  }
  ['/blogposts/{id}/versions']: {
    /**
     * getBlogPostVersions - Get blog post versions
     * 
     * Returns the versions of specific blog post. 
     * 
     * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
     * Permission to view the blog post and its corresponding space.
     */
    'get'(
      parameters?: Parameters<Paths.GetBlogPostVersions.QueryParameters & Paths.GetBlogPostVersions.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetBlogPostVersions.Responses.$200>
  }
  ['/blogposts/{blogpost-id}/versions/{version-number}']: {
    /**
     * getBlogPostVersionDetails - Get version details for blog post version
     * 
     * Retrieves version details for the specified blog post and version number.
     * 
     * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
     * Permission to view the blog post.
     */
    'get'(
      parameters?: Parameters<Paths.GetBlogPostVersionDetails.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetBlogPostVersionDetails.Responses.$200>
  }
  ['/content/convert-ids-to-types']: {
    /**
     * convertContentIdsToContentTypes - Convert content ids to content types
     * 
     * Converts a list of content ids into their associated content types. This is useful for users migrating from v1 to v2
     * who may have stored just content ids without their associated type. This will return types as they should be used in v2.
     * Notably, this will return `inline-comment` for inline comments and `footer-comment` for footer comments, which is distinct from them
     * both being represented by `comment` in v1.
     * 
     * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
     * Permission to view the requested content. Any content that the user does not have permission to view or does not exist will map to `null` in the response.
     */
    'post'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.ConvertContentIdsToContentTypes.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.ConvertContentIdsToContentTypes.Responses.$200>
  }
  ['/custom-content']: {
    /**
     * getCustomContentByType - Get custom content by type
     * 
     * Returns all custom content for a given type. The number of results is limited by the `limit` parameter and additional results (if available)
     * will be available through the `next` URL present in the `Link` response header.
     * 
     * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
     * Permission to view the custom content, the container of the custom content, and the corresponding space (if different from the container).
     */
    'get'(
      parameters?: Parameters<Paths.GetCustomContentByType.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetCustomContentByType.Responses.$200>
    /**
     * createCustomContent - Create custom content
     * 
     * Creates a new custom content in the given space, page, blogpost or other custom content.
     * 
     * Only one of `spaceId`, `pageId`, `blogPostId`, or `customContentId` is required in the request body.
     * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
     * Permission to view the content of the page or blogpost and its corresponding space. Permission to create custom content in the space.
     */
    'post'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.CreateCustomContent.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.CreateCustomContent.Responses.$201>
  }
  ['/custom-content/{id}']: {
    /**
     * getCustomContentById - Get custom content by id
     * 
     * Returns a specific piece of custom content. 
     * 
     * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
     * Permission to view the custom content, the container of the custom content, and the corresponding space (if different from the container).
     */
    'get'(
      parameters?: Parameters<Paths.GetCustomContentById.QueryParameters & Paths.GetCustomContentById.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetCustomContentById.Responses.$200>
    /**
     * updateCustomContent - Update custom content
     * 
     * Update a custom content by id.
     * At most one of `spaceId`, `pageId`, `blogPostId`, or `customContentId` is allowed in the request body.
     * Note that if `spaceId` is specified, it must be the same as the `spaceId` used for creating the custom content
     * as moving custom content to a different space is not supported.
     * 
     * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
     * Permission to view the content of the page or blogpost and its corresponding space. Permission to update custom content in the space.
     */
    'put'(
      parameters?: Parameters<Paths.UpdateCustomContent.PathParameters> | null,
      data?: Paths.UpdateCustomContent.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.UpdateCustomContent.Responses.$200>
    /**
     * deleteCustomContent - Delete custom content
     * 
     * Delete a custom content by id.
     * 
     * Deleting a custom content will either move it to the trash or permanently delete it (purge it), depending on the apiSupport.
     * To permanently delete a **trashed** custom content, the endpoint must be called with the following param `purge=true`.
     * 
     * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
     * Permission to view the content of the page or blogpost and its corresponding space.
     * Permission to delete custom content in the space.
     * Permission to administer the space (if attempting to purge).
     */
    'delete'(
      parameters?: Parameters<Paths.DeleteCustomContent.QueryParameters & Paths.DeleteCustomContent.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<any>
  }
  ['/custom-content/{id}/attachments']: {
    /**
     * getCustomContentAttachments - Get attachments for custom content
     * 
     * Returns the attachments of specific custom content. The number of results is limited by the `limit` parameter and additional results (if available)
     * will be available through the `next` URL present in the `Link` response header.
     * 
     * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
     * Permission to view the content of the custom content and its corresponding space.
     */
    'get'(
      parameters?: Parameters<Paths.GetCustomContentAttachments.QueryParameters & Paths.GetCustomContentAttachments.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetCustomContentAttachments.Responses.$200>
  }
  ['/custom-content/{id}/footer-comments']: {
    /**
     * getCustomContentComments - Get custom content comments
     * 
     * Returns the comments of the specific custom content.
     * The number of results is limited by the `limit` parameter and additional results (if available) will be available through
     * the `next` URL present in the `Link` response header.
     * 
     * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
     * Permission to view the custom content and its corresponding containers.
     */
    'get'(
      parameters?: Parameters<Paths.GetCustomContentComments.QueryParameters & Paths.GetCustomContentComments.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetCustomContentComments.Responses.$200>
  }
  ['/custom-content/{id}/labels']: {
    /**
     * getCustomContentLabels - Get labels for custom content
     * 
     * Returns the labels for a specific piece of custom content. The number of results is limited by the `limit` parameter and additional results (if available)
     * will be available through the `next` URL present in the `Link` response header.
     * 
     * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
     * Permission to view the custom content and its corresponding space.
     * Only labels that the user has permission to view will be returned.
     */
    'get'(
      parameters?: Parameters<Paths.GetCustomContentLabels.QueryParameters & Paths.GetCustomContentLabels.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetCustomContentLabels.Responses.$200>
  }
  ['/custom-content/{id}/operations']: {
    /**
     * getCustomContentOperations - Get permitted operations for custom content
     * 
     * Returns the permitted operations on specific custom content.
     * 
     * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
     * Permission to view the parent content of the custom content and its corresponding space.
     */
    'get'(
      parameters?: Parameters<Paths.GetCustomContentOperations.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetCustomContentOperations.Responses.$200>
  }
  ['/custom-content/{custom-content-id}/properties']: {
    /**
     * getCustomContentContentProperties - Get content properties for custom content
     * 
     * Retrieves Content Properties tied to a specified custom content.
     * 
     * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
     * Permission to view the custom content.
     */
    'get'(
      parameters?: Parameters<Paths.GetCustomContentContentProperties.QueryParameters & Paths.GetCustomContentContentProperties.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetCustomContentContentProperties.Responses.$200>
    /**
     * createCustomContentProperty - Create content property for custom content
     * 
     * Creates a new content property for a piece of custom content.
     * 
     * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
     * Permission to update the custom content.
     */
    'post'(
      parameters?: Parameters<Paths.CreateCustomContentProperty.PathParameters> | null,
      data?: Paths.CreateCustomContentProperty.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.CreateCustomContentProperty.Responses.$200>
  }
  ['/custom-content/{custom-content-id}/properties/{property-id}']: {
    /**
     * getCustomContentContentPropertiesById - Get content property for custom content by id
     * 
     * Retrieves a specific Content Property by ID that is attached to a specified custom content.
     * 
     * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
     * Permission to view the page.
     */
    'get'(
      parameters?: Parameters<Paths.GetCustomContentContentPropertiesById.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetCustomContentContentPropertiesById.Responses.$200>
    /**
     * updateCustomContentPropertyById - Update content property for custom content by id
     * 
     * Update a content property for a piece of custom content by its id. 
     * 
     * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
     * Permission to edit the custom content.
     */
    'put'(
      parameters?: Parameters<Paths.UpdateCustomContentPropertyById.PathParameters> | null,
      data?: Paths.UpdateCustomContentPropertyById.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.UpdateCustomContentPropertyById.Responses.$200>
    /**
     * deleteCustomContentPropertyById - Delete content property for custom content by id
     * 
     * Deletes a content property for a piece of custom content by its id. 
     * 
     * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
     * Permission to edit the custom content.
     */
    'delete'(
      parameters?: Parameters<Paths.DeleteCustomContentPropertyById.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.DeleteCustomContentPropertyById.Responses.$204>
  }
  ['/labels']: {
    /**
     * getLabels - Get labels
     * 
     * Returns all labels. The number of results is limited by the `limit` parameter and additional results (if available)
     * will be available through the `next` URL present in the `Link` response header.
     * 
     * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
     * Permission to access the Confluence site ('Can use' global permission).
     * Only labels that the user has permission to view will be returned.
     */
    'get'(
      parameters?: Parameters<Paths.GetLabels.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetLabels.Responses.$200>
  }
  ['/labels/{id}/attachments']: {
    /**
     * getLabelAttachments - Get attachments for label
     * 
     * Returns the attachments of specified label. The number of results is limited by the `limit` parameter and additional results (if available)
     * will be available through the `next` URL present in the `Link` response header.
     * 
     * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
     * Permission to view the attachment and its corresponding space.
     */
    'get'(
      parameters?: Parameters<Paths.GetLabelAttachments.QueryParameters & Paths.GetLabelAttachments.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetLabelAttachments.Responses.$200>
  }
  ['/labels/{id}/blogposts']: {
    /**
     * getLabelBlogPosts - Get blog posts for label
     * 
     * Returns the blogposts of specified label. The number of results is limited by the `limit` parameter and additional results (if available)
     * will be available through the `next` URL present in the `Link` response header.
     * 
     * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
     * Permission to view the content of the page and its corresponding space.
     */
    'get'(
      parameters?: Parameters<Paths.GetLabelBlogPosts.QueryParameters & Paths.GetLabelBlogPosts.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetLabelBlogPosts.Responses.$200>
  }
  ['/labels/{id}/pages']: {
    /**
     * getLabelPages - Get pages for label
     * 
     * Returns the pages of specified label. The number of results is limited by the `limit` parameter and additional results (if available)
     * will be available through the `next` URL present in the `Link` response header.
     * 
     * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
     * Permission to view the content of the page and its corresponding space.
     */
    'get'(
      parameters?: Parameters<Paths.GetLabelPages.QueryParameters & Paths.GetLabelPages.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetLabelPages.Responses.$200>
  }
  ['/pages']: {
    /**
     * getPages - Get pages
     * 
     * Returns all pages. The number of results is limited by the `limit` parameter and additional results (if available)
     * will be available through the `next` URL present in the `Link` response header.
     * 
     * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
     * Permission to access the Confluence site ('Can use' global permission).
     * Only pages that the user has permission to view will be returned.
     */
    'get'(
      parameters?: Parameters<Paths.GetPages.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetPages.Responses.$200>
    /**
     * createPage - Create page
     * 
     * Creates a page in the space.
     * 
     * Pages are created as published by default unless specified as a draft in the status field. If creating a published page, the title must be specified.
     * 
     * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
     * Permission to view the corresponding space. Permission to create a page in the space.
     */
    'post'(
      parameters?: Parameters<Paths.CreatePage.QueryParameters> | null,
      data?: Paths.CreatePage.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.CreatePage.Responses.$200>
  }
  ['/pages/{id}']: {
    /**
     * getPageById - Get page by id
     * 
     * Returns a specific page.
     * 
     * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
     * Permission to view the page and its corresponding space.
     */
    'get'(
      parameters?: Parameters<Paths.GetPageById.QueryParameters & Paths.GetPageById.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetPageById.Responses.$200>
    /**
     * updatePage - Update page
     * 
     * Update a page by id.
     * 
     * When the "current" version is updated, the provided body content is considered as the latest version. This latest body content
     * will be attempted to be merged into the draft version through a content reconciliation algorithm. If two versions are significantly diverged, 
     * the latest provided content may entirely override what was previously in the draft. 
     * 
     * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
     * Permission to view the page and its corresponding space. Permission to update pages in the space.
     */
    'put'(
      parameters?: Parameters<Paths.UpdatePage.PathParameters> | null,
      data?: Paths.UpdatePage.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.UpdatePage.Responses.$200>
    /**
     * deletePage - Delete page
     * 
     * Delete a page by id.
     * 
     * By default this will delete pages that are non-drafts. To delete a page that is a draft, the endpoint must be called on a 
     * draft with the following param `draft=true`. Discarded drafts are not sent to the trash and are permanently deleted.
     * 
     * Deleting a page moves the page to the trash, where it can be restored later. To permanently delete a page (or "purge" it),
     * the endpoint must be called on a **trashed** page with the following param `purge=true`.
     * 
     * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
     * Permission to view the page and its corresponding space.
     * Permission to delete pages in the space.
     * Permission to administer the space (if attempting to purge).
     */
    'delete'(
      parameters?: Parameters<Paths.DeletePage.QueryParameters & Paths.DeletePage.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<any>
  }
  ['/pages/{id}/attachments']: {
    /**
     * getPageAttachments - Get attachments for page
     * 
     * Returns the attachments of specific page. The number of results is limited by the `limit` parameter and additional results (if available)
     * will be available through the `next` URL present in the `Link` response header.
     * 
     * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
     * Permission to view the content of the page and its corresponding space.
     */
    'get'(
      parameters?: Parameters<Paths.GetPageAttachments.QueryParameters & Paths.GetPageAttachments.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetPageAttachments.Responses.$200>
  }
  ['/pages/{id}/custom-content']: {
    /**
     * getCustomContentByTypeInPage - Get custom content by type in page
     * 
     * Returns all custom content for a given type within a given page. The number of results is limited by the `limit` parameter and additional results (if available)
     * will be available through the `next` URL present in the `Link` response header.
     * 
     * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
     * Permission to view the custom content, the container of the custom content (page), and the corresponding space.
     */
    'get'(
      parameters?: Parameters<Paths.GetCustomContentByTypeInPage.QueryParameters & Paths.GetCustomContentByTypeInPage.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetCustomContentByTypeInPage.Responses.$200>
  }
  ['/pages/{id}/labels']: {
    /**
     * getPageLabels - Get labels for page
     * 
     * Returns the labels of specific page. The number of results is limited by the `limit` parameter and additional results (if available)
     * will be available through the `next` URL present in the `Link` response header.
     * 
     * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
     * Permission to view the content of the page and its corresponding space.
     * Only labels that the user has permission to view will be returned.
     */
    'get'(
      parameters?: Parameters<Paths.GetPageLabels.QueryParameters & Paths.GetPageLabels.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetPageLabels.Responses.$200>
  }
  ['/pages/{id}/likes/count']: {
    /**
     * getPageLikeCount - Get like count for page
     * 
     * Returns the count of likes of specific page.
     * 
     * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
     * Permission to view the content of the page and its corresponding space.
     */
    'get'(
      parameters?: Parameters<Paths.GetPageLikeCount.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetPageLikeCount.Responses.$200>
  }
  ['/pages/{id}/likes/users']: {
    /**
     * getPageLikeUsers - Get account IDs of likes for page
     * 
     * Returns the account IDs of likes of specific page.
     * 
     * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
     * Permission to view the content of the page and its corresponding space.
     */
    'get'(
      parameters?: Parameters<Paths.GetPageLikeUsers.QueryParameters & Paths.GetPageLikeUsers.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetPageLikeUsers.Responses.$200>
  }
  ['/pages/{id}/operations']: {
    /**
     * getPageOperations - Get permitted operations for page
     * 
     * Returns the permitted operations on specific page.
     * 
     * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
     * Permission to view the parent content of the page and its corresponding space.
     */
    'get'(
      parameters?: Parameters<Paths.GetPageOperations.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetPageOperations.Responses.$200>
  }
  ['/pages/{page-id}/properties']: {
    /**
     * getPageContentProperties - Get content properties for page
     * 
     * Retrieves Content Properties tied to a specified page.
     * 
     * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
     * Permission to view the page.
     */
    'get'(
      parameters?: Parameters<Paths.GetPageContentProperties.QueryParameters & Paths.GetPageContentProperties.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetPageContentProperties.Responses.$200>
    /**
     * createPageProperty - Create content property for page
     * 
     * Creates a new content property for a page.
     * 
     * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
     * Permission to update the page.
     */
    'post'(
      parameters?: Parameters<Paths.CreatePageProperty.PathParameters> | null,
      data?: Paths.CreatePageProperty.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.CreatePageProperty.Responses.$200>
  }
  ['/pages/{page-id}/properties/{property-id}']: {
    /**
     * getPageContentPropertiesById - Get content property for page by id
     * 
     * Retrieves a specific Content Property by ID that is attached to a specified page.
     * 
     * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
     * Permission to view the page.
     */
    'get'(
      parameters?: Parameters<Paths.GetPageContentPropertiesById.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetPageContentPropertiesById.Responses.$200>
    /**
     * updatePagePropertyById - Update content property for page by id
     * 
     * Update a content property for a page by its id. 
     * 
     * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
     * Permission to edit the page.
     */
    'put'(
      parameters?: Parameters<Paths.UpdatePagePropertyById.PathParameters> | null,
      data?: Paths.UpdatePagePropertyById.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.UpdatePagePropertyById.Responses.$200>
    /**
     * deletePagePropertyById - Delete content property for page by id
     * 
     * Deletes a content property for a page by its id. 
     * 
     * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
     * Permission to edit the page.
     */
    'delete'(
      parameters?: Parameters<Paths.DeletePagePropertyById.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.DeletePagePropertyById.Responses.$204>
  }
  ['/pages/{id}/redact']: {
    /**
     * postRedactPage - Redact Content in a Confluence Page
     * 
     * Redacts sensitive content in a Confluence page by replacing specified text ranges with redaction markers. 
     * Each redaction in the response includes a unique UUID for restoration (except code block redactions). 
     * The response metadata items maintain the same order as the input redaction pointers, and completely 
     * overlapping redactions are merged into a single redaction with one UUID.
     * 
     * **Note**: This endpoint requires **Atlassian Guard Premium**.
     * 
     */
    'post'(
      parameters?: Parameters<Paths.PostRedactPage.PathParameters> | null,
      data?: Paths.PostRedactPage.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.PostRedactPage.Responses.$202>
  }
  ['/blogposts/{id}/redact']: {
    /**
     * postRedactBlog - Redact Content in a Confluence Blog Post
     * 
     * Redacts sensitive content in a Confluence blog post by replacing specified text ranges with redaction markers. 
     * Each redaction in the response includes a unique UUID for restoration (except code block redactions). 
     * The response metadata items maintain the same order as the input redaction pointers, and completely 
     * overlapping redactions are merged into a single redaction with one UUID.
     * 
     * **Note**: This endpoint requires **Atlassian Guard Premium**.
     * 
     */
    'post'(
      parameters?: Parameters<Paths.PostRedactBlog.PathParameters> | null,
      data?: Paths.PostRedactBlog.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.PostRedactBlog.Responses.$202>
  }
  ['/pages/{id}/title']: {
    /**
     * updatePageTitle - Update page title
     * 
     * Updates the title of a specified page.
     * 
     * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
     * Permission to view the page and its corresponding space. Permission to update pages in the space.
     */
    'put'(
      parameters?: Parameters<Paths.UpdatePageTitle.PathParameters> | null,
      data?: Paths.UpdatePageTitle.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.UpdatePageTitle.Responses.$200>
  }
  ['/pages/{id}/versions']: {
    /**
     * getPageVersions - Get page versions
     * 
     * Returns the versions of specific page.
     * 
     * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
     * Permission to view the page and its corresponding space.
     */
    'get'(
      parameters?: Parameters<Paths.GetPageVersions.QueryParameters & Paths.GetPageVersions.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetPageVersions.Responses.$200>
  }
  ['/whiteboards']: {
    /**
     * createWhiteboard - Create whiteboard
     * 
     * Creates a whiteboard in the space.
     * 
     * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
     * Permission to view the corresponding space. Permission to create a whiteboard in the space.
     */
    'post'(
      parameters?: Parameters<Paths.CreateWhiteboard.QueryParameters> | null,
      data?: Paths.CreateWhiteboard.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.CreateWhiteboard.Responses.$200>
  }
  ['/whiteboards/{id}']: {
    /**
     * getWhiteboardById - Get whiteboard by id
     * 
     * Returns a specific whiteboard.
     * 
     * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
     * Permission to view the whiteboard and its corresponding space.
     */
    'get'(
      parameters?: Parameters<Paths.GetWhiteboardById.QueryParameters & Paths.GetWhiteboardById.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetWhiteboardById.Responses.$200>
    /**
     * deleteWhiteboard - Delete whiteboard
     * 
     * Delete a whiteboard by id.
     * 
     * Deleting a whiteboard moves the whiteboard to the trash, where it can be restored later
     * 
     * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
     * Permission to view the whiteboard and its corresponding space.
     * Permission to delete whiteboards in the space.
     */
    'delete'(
      parameters?: Parameters<Paths.DeleteWhiteboard.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<any>
  }
  ['/whiteboards/{id}/properties']: {
    /**
     * getWhiteboardContentProperties - Get content properties for whiteboard
     * 
     * Retrieves Content Properties tied to a specified whiteboard.
     * 
     * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
     * Permission to view the whiteboard.
     */
    'get'(
      parameters?: Parameters<Paths.GetWhiteboardContentProperties.QueryParameters & Paths.GetWhiteboardContentProperties.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetWhiteboardContentProperties.Responses.$200>
    /**
     * createWhiteboardProperty - Create content property for whiteboard
     * 
     * Creates a new content property for a whiteboard.
     * 
     * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
     * Permission to update the whiteboard.
     */
    'post'(
      parameters?: Parameters<Paths.CreateWhiteboardProperty.PathParameters> | null,
      data?: Paths.CreateWhiteboardProperty.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.CreateWhiteboardProperty.Responses.$200>
  }
  ['/whiteboards/{whiteboard-id}/properties/{property-id}']: {
    /**
     * getWhiteboardContentPropertiesById - Get content property for whiteboard by id
     * 
     * Retrieves a specific Content Property by ID that is attached to a specified whiteboard.
     * 
     * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
     * Permission to view the whiteboard.
     */
    'get'(
      parameters?: Parameters<Paths.GetWhiteboardContentPropertiesById.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetWhiteboardContentPropertiesById.Responses.$200>
    /**
     * updateWhiteboardPropertyById - Update content property for whiteboard by id
     * 
     * Update a content property for a whiteboard by its id. 
     * 
     * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
     * Permission to edit the whiteboard.
     */
    'put'(
      parameters?: Parameters<Paths.UpdateWhiteboardPropertyById.PathParameters> | null,
      data?: Paths.UpdateWhiteboardPropertyById.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.UpdateWhiteboardPropertyById.Responses.$200>
    /**
     * deleteWhiteboardPropertyById - Delete content property for whiteboard by id
     * 
     * Deletes a content property for a whiteboard by its id. 
     * 
     * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
     * Permission to edit the whiteboard.
     */
    'delete'(
      parameters?: Parameters<Paths.DeleteWhiteboardPropertyById.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.DeleteWhiteboardPropertyById.Responses.$204>
  }
  ['/whiteboards/{id}/operations']: {
    /**
     * getWhiteboardOperations - Get permitted operations for a whiteboard
     * 
     * Returns the permitted operations on specific whiteboard.
     * 
     * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
     * Permission to view the whiteboard and its corresponding space.
     */
    'get'(
      parameters?: Parameters<Paths.GetWhiteboardOperations.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetWhiteboardOperations.Responses.$200>
  }
  ['/whiteboards/{id}/direct-children']: {
    /**
     * getWhiteboardDirectChildren - Get direct children of a whiteboard
     * 
     * Returns all children for given whiteboard id in the content tree. The number of results is limited by the `limit` parameter and additional results (if available)
     * will be available through the `next` URL present in the `Link` response header.
     * 
     * The following types of content will be returned:
     * - Database
     * - Embed
     * - Folder
     * - Page
     * - Whiteboard
     * 
     * This endpoint returns minimal information about each child. To fetch more details, use a related endpoint based on the content type, such
     * as:
     * 
     * - [Get database by id](https://developer.atlassian.com/cloud/confluence/rest/v2/api-group-database/#api-databases-id-get)
     * - [Get embed by id](https://developer.atlassian.com/cloud/confluence/rest/v2/api-group-smart-link/#api-embeds-id-get)
     * - [Get folder by id](https://developer.atlassian.com/cloud/confluence/rest/v2/api-group-folder/#api-folders-id-get)
     * - [Get page by id](https://developer.atlassian.com/cloud/confluence/rest/v2/api-group-page/#api-pages-id-get)
     * - [Get whiteboard by id](https://developer.atlassian.com/cloud/confluence/rest/v2/api-group-whiteboard/#api-whiteboards-id-get).
     * 
     * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
     * Permission to access the Confluence site ('Can use' global permission).
     * Only content that the user has permission to view will be returned.
     */
    'get'(
      parameters?: Parameters<Paths.GetWhiteboardDirectChildren.QueryParameters & Paths.GetWhiteboardDirectChildren.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetWhiteboardDirectChildren.Responses.$200>
  }
  ['/whiteboards/{id}/descendants']: {
    /**
     * getWhiteboardDescendants - Get descendants of a whiteboard
     * 
     * Returns descendants in the content tree for a given whiteboard by ID in top-to-bottom order (that is, the highest descendant is the first
     * item in the response payload). The number of results is limited by the `limit` parameter and additional results (if available)
     * will be available by calling this endpoint with the cursor in the response payload. There is also a `depth` parameter specifying depth
     * of descendants to be fetched.
     * 
     * The following types of content will be returned:
     * - Database
     * - Embed
     * - Folder
     * - Page
     * - Whiteboard
     * 
     * This endpoint returns minimal information about each descendant. To fetch more details, use a related endpoint based on the content type, such
     * as:
     * 
     * - [Get database by id](https://developer.atlassian.com/cloud/confluence/rest/v2/api-group-database/#api-databases-id-get)
     * - [Get embed by id](https://developer.atlassian.com/cloud/confluence/rest/v2/api-group-smart-link/#api-embeds-id-get)
     * - [Get folder by id](https://developer.atlassian.com/cloud/confluence/rest/v2/api-group-folder/#api-folders-id-get)
     * - [Get page by id](https://developer.atlassian.com/cloud/confluence/rest/v2/api-group-page/#api-pages-id-get)
     * - [Get whiteboard by id](https://developer.atlassian.com/cloud/confluence/rest/v2/api-group-whiteboard/#api-whiteboards-id-get).
     * 
     * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
     * Permission to access the Confluence site ('Can use' global permission).
     * Permission to view the whiteboard and its corresponding space
     */
    'get'(
      parameters?: Parameters<Paths.GetWhiteboardDescendants.QueryParameters & Paths.GetWhiteboardDescendants.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetWhiteboardDescendants.Responses.$200>
  }
  ['/whiteboards/{id}/ancestors']: {
    /**
     * getWhiteboardAncestors - Get all ancestors of whiteboard
     * 
     * Returns all ancestors for a given whiteboard by ID in top-to-bottom order (that is, the highest ancestor is the first
     * item in the response payload). The number of results is limited by the `limit` parameter and additional results (if available)
     * will be available by calling this endpoint with the ID of first ancestor in the response payload.
     * 
     * This endpoint returns minimal information about each ancestor. To fetch more details, use a related endpoint, such
     * as [Get whiteboard by id](https://developer.atlassian.com/cloud/confluence/rest/v2/api-group-whiteboard/#api-whiteboards-id-get).
     * 
     * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
     * Permission to access the Confluence site ('Can use' global permission).
     * Permission to view the whiteboard and its corresponding space
     */
    'get'(
      parameters?: Parameters<Paths.GetWhiteboardAncestors.QueryParameters & Paths.GetWhiteboardAncestors.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetWhiteboardAncestors.Responses.$200>
  }
  ['/databases']: {
    /**
     * createDatabase - Create database
     * 
     * Creates a database in the space.
     * 
     * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
     * Permission to view the corresponding space. Permission to create a database in the space.
     */
    'post'(
      parameters?: Parameters<Paths.CreateDatabase.QueryParameters> | null,
      data?: Paths.CreateDatabase.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.CreateDatabase.Responses.$200>
  }
  ['/databases/{id}']: {
    /**
     * getDatabaseById - Get database by id
     * 
     * Returns a specific database.
     * 
     * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
     * Permission to view the database and its corresponding space.
     */
    'get'(
      parameters?: Parameters<Paths.GetDatabaseById.QueryParameters & Paths.GetDatabaseById.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetDatabaseById.Responses.$200>
    /**
     * deleteDatabase - Delete database
     * 
     * Delete a database by id.
     * 
     * Deleting a database moves the database to the trash, where it can be restored later
     * 
     * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
     * Permission to view the database and its corresponding space.
     * Permission to delete databases in the space.
     */
    'delete'(
      parameters?: Parameters<Paths.DeleteDatabase.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<any>
  }
  ['/databases/{id}/properties']: {
    /**
     * getDatabaseContentProperties - Get content properties for database
     * 
     * Retrieves Content Properties tied to a specified database.
     * 
     * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
     * Permission to view the database.
     */
    'get'(
      parameters?: Parameters<Paths.GetDatabaseContentProperties.QueryParameters & Paths.GetDatabaseContentProperties.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetDatabaseContentProperties.Responses.$200>
    /**
     * createDatabaseProperty - Create content property for database
     * 
     * Creates a new content property for a database.
     * 
     * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
     * Permission to update the database.
     */
    'post'(
      parameters?: Parameters<Paths.CreateDatabaseProperty.PathParameters> | null,
      data?: Paths.CreateDatabaseProperty.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.CreateDatabaseProperty.Responses.$200>
  }
  ['/databases/{database-id}/properties/{property-id}']: {
    /**
     * getDatabaseContentPropertiesById - Get content property for database by id
     * 
     * Retrieves a specific Content Property by ID that is attached to a specified database.
     * 
     * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
     * Permission to view the database.
     */
    'get'(
      parameters?: Parameters<Paths.GetDatabaseContentPropertiesById.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetDatabaseContentPropertiesById.Responses.$200>
    /**
     * updateDatabasePropertyById - Update content property for database by id
     * 
     * Update a content property for a database by its id. 
     * 
     * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
     * Permission to edit the database.
     */
    'put'(
      parameters?: Parameters<Paths.UpdateDatabasePropertyById.PathParameters> | null,
      data?: Paths.UpdateDatabasePropertyById.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.UpdateDatabasePropertyById.Responses.$200>
    /**
     * deleteDatabasePropertyById - Delete content property for database by id
     * 
     * Deletes a content property for a database by its id. 
     * 
     * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
     * Permission to edit the database.
     */
    'delete'(
      parameters?: Parameters<Paths.DeleteDatabasePropertyById.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.DeleteDatabasePropertyById.Responses.$204>
  }
  ['/databases/{id}/operations']: {
    /**
     * getDatabaseOperations - Get permitted operations for a database
     * 
     * Returns the permitted operations on specific database.
     * 
     * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
     * Permission to view the database and its corresponding space.
     */
    'get'(
      parameters?: Parameters<Paths.GetDatabaseOperations.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetDatabaseOperations.Responses.$200>
  }
  ['/databases/{id}/direct-children']: {
    /**
     * getDatabaseDirectChildren - Get direct children of a database
     * 
     * Returns all children for given database id in the content tree. The number of results is limited by the `limit` parameter and additional results (if available)
     * will be available through the `next` URL present in the `Link` response header.
     * 
     * The following types of content will be returned:
     * - Database
     * - Embed
     * - Folder
     * - Page
     * - Whiteboard
     * 
     * This endpoint returns minimal information about each child. To fetch more details, use a related endpoint based on the content type, such
     * as:
     * 
     * - [Get database by id](https://developer.atlassian.com/cloud/confluence/rest/v2/api-group-database/#api-databases-id-get)
     * - [Get embed by id](https://developer.atlassian.com/cloud/confluence/rest/v2/api-group-smart-link/#api-embeds-id-get)
     * - [Get folder by id](https://developer.atlassian.com/cloud/confluence/rest/v2/api-group-folder/#api-folders-id-get)
     * - [Get page by id](https://developer.atlassian.com/cloud/confluence/rest/v2/api-group-page/#api-pages-id-get)
     * - [Get whiteboard by id](https://developer.atlassian.com/cloud/confluence/rest/v2/api-group-whiteboard/#api-whiteboards-id-get).
     * 
     * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
     * Permission to access the Confluence site ('Can use' global permission).
     * Only content that the user has permission to view will be returned.
     */
    'get'(
      parameters?: Parameters<Paths.GetDatabaseDirectChildren.QueryParameters & Paths.GetDatabaseDirectChildren.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetDatabaseDirectChildren.Responses.$200>
  }
  ['/databases/{id}/descendants']: {
    /**
     * getDatabaseDescendants - Get descendants of a database
     * 
     * Returns descendants in the content tree for a given database by ID in top-to-bottom order (that is, the highest descendant is the first
     * item in the response payload). The number of results is limited by the `limit` parameter and additional results (if available)
     * will be available by calling this endpoint with the cursor in the response payload. There is also a `depth` parameter specifying depth
     * of descendants to be fetched.
     * 
     * The following types of content will be returned:
     * - Database
     * - Embed
     * - Folder
     * - Page
     * - Whiteboard
     * 
     * This endpoint returns minimal information about each descendant. To fetch more details, use a related endpoint based on the content type, such
     * as:
     * 
     * - [Get database by id](https://developer.atlassian.com/cloud/confluence/rest/v2/api-group-database/#api-databases-id-get)
     * - [Get embed by id](https://developer.atlassian.com/cloud/confluence/rest/v2/api-group-smart-link/#api-embeds-id-get)
     * - [Get folder by id](https://developer.atlassian.com/cloud/confluence/rest/v2/api-group-folder/#api-folders-id-get)
     * - [Get page by id](https://developer.atlassian.com/cloud/confluence/rest/v2/api-group-page/#api-pages-id-get)
     * - [Get whiteboard by id](https://developer.atlassian.com/cloud/confluence/rest/v2/api-group-whiteboard/#api-whiteboards-id-get).
     * 
     * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
     * Permission to access the Confluence site ('Can use' global permission).
     * Permission to view the database and its corresponding space
     */
    'get'(
      parameters?: Parameters<Paths.GetDatabaseDescendants.QueryParameters & Paths.GetDatabaseDescendants.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetDatabaseDescendants.Responses.$200>
  }
  ['/databases/{id}/ancestors']: {
    /**
     * getDatabaseAncestors - Get all ancestors of database
     * 
     * Returns all ancestors for a given database by ID in top-to-bottom order (that is, the highest ancestor is the first
     * item in the response payload). The number of results is limited by the `limit` parameter and additional results (if available)
     * will be available by calling this endpoint with the ID of first ancestor in the response payload.
     * 
     * This endpoint returns minimal information about each ancestor. To fetch more details, use a related endpoint, such
     * as [Get database by id](https://developer.atlassian.com/cloud/confluence/rest/v2/api-group-database/#api-databases-id-get).
     * 
     * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
     * Permission to access the Confluence site ('Can use' global permission).
     * Permission to view the database and its corresponding space
     */
    'get'(
      parameters?: Parameters<Paths.GetDatabaseAncestors.QueryParameters & Paths.GetDatabaseAncestors.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetDatabaseAncestors.Responses.$200>
  }
  ['/embeds']: {
    /**
     * createSmartLink - Create Smart Link in the content tree
     * 
     * Creates a Smart Link in the content tree in the space.
     * 
     * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
     * Permission to view the corresponding space. Permission to create a Smart Link in the content tree in the space.
     */
    'post'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.CreateSmartLink.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.CreateSmartLink.Responses.$200>
  }
  ['/embeds/{id}']: {
    /**
     * getSmartLinkById - Get Smart Link in the content tree by id
     * 
     * Returns a specific Smart Link in the content tree.
     * 
     * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
     * Permission to view the Smart Link in the content tree and its corresponding space.
     */
    'get'(
      parameters?: Parameters<Paths.GetSmartLinkById.QueryParameters & Paths.GetSmartLinkById.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetSmartLinkById.Responses.$200>
    /**
     * deleteSmartLink - Delete Smart Link in the content tree
     * 
     * Delete a Smart Link in the content tree by id.
     * 
     * Deleting a Smart Link in the content tree moves the Smart Link to the trash, where it can be restored later
     * 
     * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
     * Permission to view the Smart Link in the content tree and its corresponding space.
     * Permission to delete Smart Links in the content tree in the space.
     */
    'delete'(
      parameters?: Parameters<Paths.DeleteSmartLink.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<any>
  }
  ['/embeds/{id}/properties']: {
    /**
     * getSmartLinkContentProperties - Get content properties for Smart Link in the content tree
     * 
     * Retrieves Content Properties tied to a specified Smart Link in the content tree.
     * 
     * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
     * Permission to view the Smart Link in the content tree.
     */
    'get'(
      parameters?: Parameters<Paths.GetSmartLinkContentProperties.QueryParameters & Paths.GetSmartLinkContentProperties.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetSmartLinkContentProperties.Responses.$200>
    /**
     * createSmartLinkProperty - Create content property for Smart Link in the content tree
     * 
     * Creates a new content property for a Smart Link in the content tree.
     * 
     * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
     * Permission to update the Smart Link in the content tree.
     */
    'post'(
      parameters?: Parameters<Paths.CreateSmartLinkProperty.PathParameters> | null,
      data?: Paths.CreateSmartLinkProperty.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.CreateSmartLinkProperty.Responses.$200>
  }
  ['/embeds/{embed-id}/properties/{property-id}']: {
    /**
     * getSmartLinkContentPropertiesById - Get content property for Smart Link in the content tree by id
     * 
     * Retrieves a specific Content Property by ID that is attached to a specified Smart Link in the content tree.
     * 
     * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
     * Permission to view the Smart Link in the content tree.
     */
    'get'(
      parameters?: Parameters<Paths.GetSmartLinkContentPropertiesById.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetSmartLinkContentPropertiesById.Responses.$200>
    /**
     * updateSmartLinkPropertyById - Update content property for Smart Link in the content tree by id
     * 
     * Update a content property for a Smart Link in the content tree by its id. 
     * 
     * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
     * Permission to edit the Smart Link in the content tree.
     */
    'put'(
      parameters?: Parameters<Paths.UpdateSmartLinkPropertyById.PathParameters> | null,
      data?: Paths.UpdateSmartLinkPropertyById.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.UpdateSmartLinkPropertyById.Responses.$200>
    /**
     * deleteSmartLinkPropertyById - Delete content property for Smart Link in the content tree by id
     * 
     * Deletes a content property for a Smart Link in the content tree by its id. 
     * 
     * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
     * Permission to edit the Smart Link in the content tree.
     */
    'delete'(
      parameters?: Parameters<Paths.DeleteSmartLinkPropertyById.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.DeleteSmartLinkPropertyById.Responses.$204>
  }
  ['/embeds/{id}/operations']: {
    /**
     * getSmartLinkOperations - Get permitted operations for a Smart Link in the content tree
     * 
     * Returns the permitted operations on specific Smart Link in the content tree.
     * 
     * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
     * Permission to view the Smart Link in the content tree and its corresponding space.
     */
    'get'(
      parameters?: Parameters<Paths.GetSmartLinkOperations.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetSmartLinkOperations.Responses.$200>
  }
  ['/embeds/{id}/direct-children']: {
    /**
     * getSmartLinkDirectChildren - Get direct children of a Smart Link
     * 
     * Returns all children for given smart link id in the content tree. The number of results is limited by the `limit` parameter and additional results (if available)
     * will be available through the `next` URL present in the `Link` response header.
     * 
     * The following types of content will be returned:
     * - Database
     * - Embed
     * - Folder
     * - Page
     * - Whiteboard
     * 
     * This endpoint returns minimal information about each child. To fetch more details, use a related endpoint based on the content type, such
     * as:
     * 
     * - [Get database by id](https://developer.atlassian.com/cloud/confluence/rest/v2/api-group-database/#api-databases-id-get)
     * - [Get embed by id](https://developer.atlassian.com/cloud/confluence/rest/v2/api-group-smart-link/#api-embeds-id-get)
     * - [Get folder by id](https://developer.atlassian.com/cloud/confluence/rest/v2/api-group-folder/#api-folders-id-get)
     * - [Get page by id](https://developer.atlassian.com/cloud/confluence/rest/v2/api-group-page/#api-pages-id-get)
     * - [Get whiteboard by id](https://developer.atlassian.com/cloud/confluence/rest/v2/api-group-whiteboard/#api-whiteboards-id-get).
     * 
     * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
     * Permission to access the Confluence site ('Can use' global permission).
     * Only content that the user has permission to view will be returned.
     */
    'get'(
      parameters?: Parameters<Paths.GetSmartLinkDirectChildren.QueryParameters & Paths.GetSmartLinkDirectChildren.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetSmartLinkDirectChildren.Responses.$200>
  }
  ['/embeds/{id}/descendants']: {
    /**
     * getSmartLinkDescendants - Get descendants of a smart link
     * 
     * Returns descendants in the content tree for a given smart link by ID in top-to-bottom order (that is, the highest descendant is the first
     * item in the response payload). The number of results is limited by the `limit` parameter and additional results (if available)
     * will be available by calling this endpoint with the cursor in the response payload. There is also a `depth` parameter specifying depth
     * of descendants to be fetched.
     * 
     * The following types of content will be returned:
     * - Database
     * - Embed
     * - Folder
     * - Page
     * - Whiteboard
     * 
     * 
     * This endpoint returns minimal information about each descendant. To fetch more details, use a related endpoint based on the content type, such
     * as:
     * 
     * - [Get database by id](https://developer.atlassian.com/cloud/confluence/rest/v2/api-group-database/#api-databases-id-get)
     * - [Get embed by id](https://developer.atlassian.com/cloud/confluence/rest/v2/api-group-smart-link/#api-embeds-id-get)
     * - [Get folder by id](https://developer.atlassian.com/cloud/confluence/rest/v2/api-group-folder/#api-folders-id-get)
     * - [Get page by id](https://developer.atlassian.com/cloud/confluence/rest/v2/api-group-page/#api-pages-id-get)
     * - [Get whiteboard by id](https://developer.atlassian.com/cloud/confluence/rest/v2/api-group-whiteboard/#api-whiteboards-id-get).
     * 
     * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
     * Permission to access the Confluence site ('Can use' global permission).
     * Permission to view the smart link and its corresponding space
     */
    'get'(
      parameters?: Parameters<Paths.GetSmartLinkDescendants.QueryParameters & Paths.GetSmartLinkDescendants.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetSmartLinkDescendants.Responses.$200>
  }
  ['/embeds/{id}/ancestors']: {
    /**
     * getSmartLinkAncestors - Get all ancestors of Smart Link in content tree
     * 
     * Returns all ancestors for a given Smart Link in the content tree by ID in top-to-bottom order (that is, the highest ancestor is
     * the first item in the response payload). The number of results is limited by the `limit` parameter and additional results 
     * (if available) will be available by calling this endpoint with the ID of first ancestor in the response payload.
     * 
     * This endpoint returns minimal information about each ancestor. To fetch more details, use a related endpoint, such
     * as [Get Smart Link in the content tree by id](https://developer.atlassian.com/cloud/confluence/rest/v2/api-group-smart-link/#api-embeds-id-get).
     * 
     * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
     * Permission to access the Confluence site ('Can use' global permission).
     * Permission to view the Smart Link in the content tree and its corresponding space
     */
    'get'(
      parameters?: Parameters<Paths.GetSmartLinkAncestors.QueryParameters & Paths.GetSmartLinkAncestors.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetSmartLinkAncestors.Responses.$200>
  }
  ['/folders']: {
    /**
     * createFolder - Create folder
     * 
     * Creates a folder in the space.
     * 
     * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
     * Permission to view the corresponding space. Permission to create a folder in the space.
     */
    'post'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.CreateFolder.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.CreateFolder.Responses.$200>
  }
  ['/folders/{id}']: {
    /**
     * getFolderById - Get folder by id
     * 
     * Returns a specific folder.
     * 
     * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
     * Permission to view the folder and its corresponding space.
     */
    'get'(
      parameters?: Parameters<Paths.GetFolderById.QueryParameters & Paths.GetFolderById.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetFolderById.Responses.$200>
    /**
     * deleteFolder - Delete folder
     * 
     * Delete a folder by id.
     * 
     * Deleting a folder moves the folder to the trash, where it can be restored later
     * 
     * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
     * Permission to view the folder and its corresponding space.
     * Permission to delete folders in the space.
     */
    'delete'(
      parameters?: Parameters<Paths.DeleteFolder.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<any>
  }
  ['/folders/{id}/properties']: {
    /**
     * getFolderContentProperties - Get content properties for folder
     * 
     * Retrieves Content Properties tied to a specified folder.
     * 
     * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
     * Permission to view the folder.
     */
    'get'(
      parameters?: Parameters<Paths.GetFolderContentProperties.QueryParameters & Paths.GetFolderContentProperties.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetFolderContentProperties.Responses.$200>
    /**
     * createFolderProperty - Create content property for folder
     * 
     * Creates a new content property for a folder.
     * 
     * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
     * Permission to update the folder.
     */
    'post'(
      parameters?: Parameters<Paths.CreateFolderProperty.PathParameters> | null,
      data?: Paths.CreateFolderProperty.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.CreateFolderProperty.Responses.$200>
  }
  ['/folders/{folder-id}/properties/{property-id}']: {
    /**
     * getFolderContentPropertiesById - Get content property for folder by id
     * 
     * Retrieves a specific Content Property by ID that is attached to a specified folder.
     * 
     * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
     * Permission to view the folder.
     */
    'get'(
      parameters?: Parameters<Paths.GetFolderContentPropertiesById.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetFolderContentPropertiesById.Responses.$200>
    /**
     * updateFolderPropertyById - Update content property for folder by id
     * 
     * Update a content property for a folder by its id. 
     * 
     * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
     * Permission to edit the folder.
     */
    'put'(
      parameters?: Parameters<Paths.UpdateFolderPropertyById.PathParameters> | null,
      data?: Paths.UpdateFolderPropertyById.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.UpdateFolderPropertyById.Responses.$200>
    /**
     * deleteFolderPropertyById - Delete content property for folder by id
     * 
     * Deletes a content property for a folder by its id. 
     * 
     * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
     * Permission to edit the folder.
     */
    'delete'(
      parameters?: Parameters<Paths.DeleteFolderPropertyById.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.DeleteFolderPropertyById.Responses.$204>
  }
  ['/folders/{id}/operations']: {
    /**
     * getFolderOperations - Get permitted operations for a folder
     * 
     * Returns the permitted operations on specific folder.
     * 
     * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
     * Permission to view the folder and its corresponding space.
     */
    'get'(
      parameters?: Parameters<Paths.GetFolderOperations.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetFolderOperations.Responses.$200>
  }
  ['/folders/{id}/direct-children']: {
    /**
     * getFolderDirectChildren - Get direct children of a folder
     * 
     * Returns all children for given folder id in the content tree. The number of results is limited by the `limit` parameter and additional results (if available)
     * will be available through the `next` URL present in the `Link` response header.
     * 
     * The following types of content will be returned:
     * - Database
     * - Embed
     * - Folder
     * - Page
     * - Whiteboard
     * 
     * This endpoint returns minimal information about each child. To fetch more details, use a related endpoint based on the content type, such
     * as:
     * 
     * - [Get database by id](https://developer.atlassian.com/cloud/confluence/rest/v2/api-group-database/#api-databases-id-get)
     * - [Get embed by id](https://developer.atlassian.com/cloud/confluence/rest/v2/api-group-smart-link/#api-embeds-id-get)
     * - [Get folder by id](https://developer.atlassian.com/cloud/confluence/rest/v2/api-group-folder/#api-folders-id-get)
     * - [Get page by id](https://developer.atlassian.com/cloud/confluence/rest/v2/api-group-page/#api-pages-id-get)
     * - [Get whiteboard by id](https://developer.atlassian.com/cloud/confluence/rest/v2/api-group-whiteboard/#api-whiteboards-id-get).
     * 
     * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
     * Permission to access the Confluence site ('Can use' global permission).
     * Only content that the user has permission to view will be returned.
     */
    'get'(
      parameters?: Parameters<Paths.GetFolderDirectChildren.QueryParameters & Paths.GetFolderDirectChildren.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetFolderDirectChildren.Responses.$200>
  }
  ['/folders/{id}/descendants']: {
    /**
     * getFolderDescendants - Get descendants of folder
     * 
     * Returns descendants in the content tree for a given folder by ID in top-to-bottom order (that is, the highest descendant is the first
     * item in the response payload). The number of results is limited by the `limit` parameter and additional results (if available)
     * will be available by calling this endpoint with the cursor in the response payload. There is also a `depth` parameter specifying depth
     * of descendants to be fetched.
     * 
     * The following types of content will be returned:
     * - Database
     * - Embed
     * - Folder
     * - Page
     * - Whiteboard
     * 
     * This endpoint returns minimal information about each descendant. To fetch more details, use a related endpoint based on the content type, such
     * as:
     * 
     * - [Get database by id](https://developer.atlassian.com/cloud/confluence/rest/v2/api-group-database/#api-databases-id-get)
     * - [Get embed by id](https://developer.atlassian.com/cloud/confluence/rest/v2/api-group-smart-link/#api-embeds-id-get)
     * - [Get folder by id](https://developer.atlassian.com/cloud/confluence/rest/v2/api-group-folder/#api-folders-id-get)
     * - [Get page by id](https://developer.atlassian.com/cloud/confluence/rest/v2/api-group-page/#api-pages-id-get)
     * - [Get whiteboard by id](https://developer.atlassian.com/cloud/confluence/rest/v2/api-group-whiteboard/#api-whiteboards-id-get).
     * 
     * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
     * Permission to access the Confluence site ('Can use' global permission).
     * Permission to view the  and its corresponding space
     */
    'get'(
      parameters?: Parameters<Paths.GetFolderDescendants.QueryParameters & Paths.GetFolderDescendants.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetFolderDescendants.Responses.$200>
  }
  ['/folders/{id}/ancestors']: {
    /**
     * getFolderAncestors - Get all ancestors of folder
     * 
     * Returns all ancestors for a given folder by ID in top-to-bottom order (that is, the highest ancestor is
     * the first item in the response payload). The number of results is limited by the `limit` parameter and additional results 
     * (if available) will be available by calling this endpoint with the ID of first ancestor in the response payload.
     * 
     * This endpoint returns minimal information about each ancestor. To fetch more details, use a related endpoint, such
     * as [Get folder by id](https://developer.atlassian.com/cloud/confluence/rest/v2/api-group-smart-link/#api-folders-id-get).
     * 
     * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
     * Permission to access the Confluence site ('Can use' global permission).
     * Permission to view the folder and its corresponding space
     */
    'get'(
      parameters?: Parameters<Paths.GetFolderAncestors.QueryParameters & Paths.GetFolderAncestors.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetFolderAncestors.Responses.$200>
  }
  ['/pages/{page-id}/versions/{version-number}']: {
    /**
     * getPageVersionDetails - Get version details for page version
     * 
     * Retrieves version details for the specified page and version number.
     * 
     * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
     * Permission to view the page.
     */
    'get'(
      parameters?: Parameters<Paths.GetPageVersionDetails.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetPageVersionDetails.Responses.$200>
  }
  ['/custom-content/{custom-content-id}/versions']: {
    /**
     * getCustomContentVersions - Get custom content versions
     * 
     * Returns the versions of specific custom content.
     * 
     * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
     * Permission to view the custom content and its corresponding page and space.
     */
    'get'(
      parameters?: Parameters<Paths.GetCustomContentVersions.QueryParameters & Paths.GetCustomContentVersions.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetCustomContentVersions.Responses.$200>
  }
  ['/custom-content/{custom-content-id}/versions/{version-number}']: {
    /**
     * getCustomContentVersionDetails - Get version details for custom content version
     * 
     * Retrieves version details for the specified custom content and version number.
     * 
     * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
     * Permission to view the page.
     */
    'get'(
      parameters?: Parameters<Paths.GetCustomContentVersionDetails.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetCustomContentVersionDetails.Responses.$200>
  }
  ['/spaces']: {
    /**
     * getSpaces - Get spaces
     * 
     * Returns all spaces. The results will be sorted by id ascending. The number of results is limited by the `limit` parameter and
     * additional results (if available) will be available through the `next` URL present in the `Link` response header.
     * 
     * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
     * Permission to access the Confluence site ('Can use' global permission).
     * Only spaces that the user has permission to view will be returned.
     */
    'get'(
      parameters?: Parameters<Paths.GetSpaces.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetSpaces.Responses.$200>
    /**
     * createSpace - Create space
     * 
     * Creates a Space as specified in the payload.
     * 
     * Available as part of the [Role-Based Access Controls Beta](https://community.atlassian.com/forums/Confluence-articles/Beta-Simplify-space-access-in-Confluence-with-roles/ba-p/3044550). 
     * 
     * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
     * Permission to create spaces.
     */
    'post'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.CreateSpace.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.CreateSpace.Responses.$201>
  }
  ['/spaces/{id}']: {
    /**
     * getSpaceById - Get space by id
     * 
     * Returns a specific space.
     * 
     * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
     * Permission to view the space.
     */
    'get'(
      parameters?: Parameters<Paths.GetSpaceById.QueryParameters & Paths.GetSpaceById.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetSpaceById.Responses.$200>
  }
  ['/spaces/{id}/blogposts']: {
    /**
     * getBlogPostsInSpace - Get blog posts in space
     * 
     * Returns all blog posts in a space. The number of results is limited by the `limit` parameter and additional results (if available)
     * will be available through the `next` URL present in the `Link` response header.
     * 
     * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
     * Permission to access the Confluence site ('Can use' global permission) and view the space.
     * Only blog posts that the user has permission to view will be returned.
     */
    'get'(
      parameters?: Parameters<Paths.GetBlogPostsInSpace.QueryParameters & Paths.GetBlogPostsInSpace.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetBlogPostsInSpace.Responses.$200>
  }
  ['/spaces/{id}/labels']: {
    /**
     * getSpaceLabels - Get labels for space
     * 
     * Returns the labels of specific space. The number of results is limited by the `limit` parameter and additional results (if available)
     * will be available through the `next` URL present in the `Link` response header.
     * 
     * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
     * Permission to view the space.
     * Only labels that the user has permission to view will be returned.
     */
    'get'(
      parameters?: Parameters<Paths.GetSpaceLabels.QueryParameters & Paths.GetSpaceLabels.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetSpaceLabels.Responses.$200>
  }
  ['/spaces/{id}/content/labels']: {
    /**
     * getSpaceContentLabels - Get labels for space content
     * 
     * Returns the labels of space content (pages, blogposts etc). The number of results is limited by the `limit` parameter and additional results (if available)
     * will be available through the `next` URL present in the `Link` response header.
     * 
     * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
     * Permission to view the space.
     * Only labels that the user has permission to view will be returned.
     */
    'get'(
      parameters?: Parameters<Paths.GetSpaceContentLabels.QueryParameters & Paths.GetSpaceContentLabels.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetSpaceContentLabels.Responses.$200>
  }
  ['/spaces/{id}/custom-content']: {
    /**
     * getCustomContentByTypeInSpace - Get custom content by type in space
     * 
     * Returns all custom content for a given type within a given space. The number of results is limited by the `limit` parameter and additional results (if available)
     * will be available through the `next` URL present in the `Link` response header.
     * 
     * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
     * Permission to view the custom content and the corresponding space.
     */
    'get'(
      parameters?: Parameters<Paths.GetCustomContentByTypeInSpace.QueryParameters & Paths.GetCustomContentByTypeInSpace.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetCustomContentByTypeInSpace.Responses.$200>
  }
  ['/spaces/{id}/operations']: {
    /**
     * getSpaceOperations - Get permitted operations for space
     * 
     * Returns the permitted operations on specific space.
     * 
     * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
     * Permission to view the corresponding space.
     */
    'get'(
      parameters?: Parameters<Paths.GetSpaceOperations.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetSpaceOperations.Responses.$200>
  }
  ['/spaces/{id}/pages']: {
    /**
     * getPagesInSpace - Get pages in space
     * 
     * Returns all pages in a space. The number of results is limited by the `limit` parameter and additional results (if available)
     * will be available through the `next` URL present in the `Link` response header.
     * 
     * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
     * Permission to access the Confluence site ('Can use' global permission) and 'View' permission for the space.
     * Only pages that the user has permission to view will be returned.
     */
    'get'(
      parameters?: Parameters<Paths.GetPagesInSpace.QueryParameters & Paths.GetPagesInSpace.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetPagesInSpace.Responses.$200>
  }
  ['/spaces/{space-id}/properties']: {
    /**
     * getSpaceProperties - Get space properties in space
     * 
     * Returns all properties for the given space. Space properties are a key-value storage associated with a space.
     * The limit parameter specifies the maximum number of results returned in a single response. Use the `link` response header
     * to paginate through additional results.
     * 
     * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
     * Permission to access the Confluence site ('Can use' global permission) and 'View' permission for the space.
     */
    'get'(
      parameters?: Parameters<Paths.GetSpaceProperties.QueryParameters & Paths.GetSpaceProperties.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetSpaceProperties.Responses.$200>
    /**
     * createSpaceProperty - Create space property in space
     * 
     * Creates a new space property.
     * 
     * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
     * Permission to access the Confluence site ('Can use' global permission) and 'Admin' permission for the space.
     */
    'post'(
      parameters?: Parameters<Paths.CreateSpaceProperty.PathParameters> | null,
      data?: Paths.CreateSpaceProperty.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.CreateSpaceProperty.Responses.$201>
  }
  ['/spaces/{space-id}/properties/{property-id}']: {
    /**
     * getSpacePropertyById - Get space property by id
     * 
     * Retrieve a space property by its id. 
     * 
     * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
     * Permission to access the Confluence site ('Can use' global permission) and 'View' permission for the space.
     */
    'get'(
      parameters?: Parameters<Paths.GetSpacePropertyById.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetSpacePropertyById.Responses.$200>
    /**
     * updateSpacePropertyById - Update space property by id
     * 
     * Update a space property by its id. 
     * 
     * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
     * Permission to access the Confluence site ('Can use' global permission) and 'Admin' permission for the space.
     */
    'put'(
      parameters?: Parameters<Paths.UpdateSpacePropertyById.PathParameters> | null,
      data?: Paths.UpdateSpacePropertyById.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.UpdateSpacePropertyById.Responses.$200>
    /**
     * deleteSpacePropertyById - Delete space property by id
     * 
     * Deletes a space property by its id. 
     * 
     * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
     * Permission to access the Confluence site ('Can use' global permission) and 'Admin' permission for the space.
     */
    'delete'(
      parameters?: Parameters<Paths.DeleteSpacePropertyById.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.DeleteSpacePropertyById.Responses.$204>
  }
  ['/spaces/{id}/permissions']: {
    /**
     * getSpacePermissionsAssignments - Get space permissions assignments
     * 
     * Returns space permission assignments for a specific space.
     * 
     * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
     * Permission to view the space.
     */
    'get'(
      parameters?: Parameters<Paths.GetSpacePermissionsAssignments.QueryParameters & Paths.GetSpacePermissionsAssignments.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetSpacePermissionsAssignments.Responses.$200>
  }
  ['/space-permissions']: {
    /**
     * getAvailableSpacePermissions - Get available space permissions
     * 
     * Retrieves the available space permissions.
     * 
     * Available as part of the [Role-Based Access Controls Beta](https://community.atlassian.com/forums/Confluence-articles/Beta-Simplify-space-access-in-Confluence-with-roles/ba-p/3044550). 
     * 
     * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
     * Permission to access the Confluence site.
     */
    'get'(
      parameters?: Parameters<Paths.GetAvailableSpacePermissions.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetAvailableSpacePermissions.Responses.$200>
  }
  ['/space-roles']: {
    /**
     * getAvailableSpaceRoles - Get available space roles
     * 
     * Retrieves the available space roles.
     * 
     * Available as part of the [Role-Based Access Controls Beta](https://community.atlassian.com/forums/Confluence-articles/Beta-Simplify-space-access-in-Confluence-with-roles/ba-p/3044550). 
     * 
     * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
     * Permission to access the Confluence site; if requesting a certain space's roles, permission to view the space.
     */
    'get'(
      parameters?: Parameters<Paths.GetAvailableSpaceRoles.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetAvailableSpaceRoles.Responses.$200>
    /**
     * createSpaceRole - Create a space role
     * 
     * Create a space role.
     * 
     * Available as part of the [Role-Based Access Controls Beta](https://community.atlassian.com/forums/Confluence-articles/Beta-Simplify-space-access-in-Confluence-with-roles/ba-p/3044550). 
     * 
     * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
     * User must be an organization or site admin. Connect and Forge app users are not authorized to access this resource.
     */
    'post'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.CreateSpaceRole.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.CreateSpaceRole.Responses.$201>
  }
  ['/space-roles/{id}']: {
    /**
     * getSpaceRolesById - Get space role by ID
     * 
     * Retrieves the space role by ID.
     * 
     * Available as part of the [Role-Based Access Controls Beta](https://community.atlassian.com/forums/Confluence-articles/Beta-Simplify-space-access-in-Confluence-with-roles/ba-p/3044550). 
     * 
     * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
     * Permission to access the Confluence site.
     */
    'get'(
      parameters?: Parameters<Paths.GetSpaceRolesById.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetSpaceRolesById.Responses.$200>
    /**
     * updateSpaceRole - Update a space role
     * 
     * Update a space role.
     * 
     * Available as part of the [Role-Based Access Controls Beta](https://community.atlassian.com/forums/Confluence-articles/Beta-Simplify-space-access-in-Confluence-with-roles/ba-p/3044550). 
     * 
     * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
     * User must be an organization or site admin. Connect and Forge app users are not authorized to access this resource.
     */
    'put'(
      parameters?: Parameters<Paths.UpdateSpaceRole.PathParameters> | null,
      data?: Paths.UpdateSpaceRole.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.UpdateSpaceRole.Responses.$202>
    /**
     * deleteSpaceRole - Delete a space role
     * 
     * Delete a space role
     * 
     * Available as part of the [Role-Based Access Controls Beta](https://community.atlassian.com/forums/Confluence-articles/Beta-Simplify-space-access-in-Confluence-with-roles/ba-p/3044550). 
     * 
     * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
     * User must be an organization or site admin. Connect and Forge app users are not authorized to access this resource.
     */
    'delete'(
      parameters?: Parameters<Paths.DeleteSpaceRole.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.DeleteSpaceRole.Responses.$202>
  }
  ['/space-role-mode']: {
    /**
     * getSpaceRoleMode - Get space role mode
     * 
     * Retrieves the space role mode.
     * 
     * Available as part of the [Role-Based Access Controls Beta](https://community.atlassian.com/forums/Confluence-articles/Beta-Simplify-space-access-in-Confluence-with-roles/ba-p/3044550). 
     * 
     * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
     * Permission to access the Confluence site ('Can use' global permission).
     */
    'get'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetSpaceRoleMode.Responses.$200>
  }
  ['/spaces/{id}/role-assignments']: {
    /**
     * getSpaceRoleAssignments - Get space role assignments
     * 
     * Retrieves the space role assignments.
     * 
     * Available as part of the [Role-Based Access Controls Beta](https://community.atlassian.com/forums/Confluence-articles/Beta-Simplify-space-access-in-Confluence-with-roles/ba-p/3044550). 
     * 
     * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
     * Permission to view the space.
     */
    'get'(
      parameters?: Parameters<Paths.GetSpaceRoleAssignments.QueryParameters & Paths.GetSpaceRoleAssignments.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetSpaceRoleAssignments.Responses.$200>
    /**
     * setSpaceRoleAssignments - Set space role assignments
     * 
     * Sets space role assignments as specified in the payload.
     * 
     * Available as part of the [Role-Based Access Controls Beta](https://community.atlassian.com/forums/Confluence-articles/Beta-Simplify-space-access-in-Confluence-with-roles/ba-p/3044550). 
     * 
     * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
     * Permission to manage roles in the space.
     */
    'post'(
      parameters?: Parameters<Paths.SetSpaceRoleAssignments.PathParameters> | null,
      data?: Paths.SetSpaceRoleAssignments.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.SetSpaceRoleAssignments.Responses.$200>
  }
  ['/pages/{id}/footer-comments']: {
    /**
     * getPageFooterComments - Get footer comments for page
     * 
     * Returns the root footer comments of specific page. The number of results is limited by the `limit` parameter and additional results (if available)
     * will be available through the `next` URL present in the `Link` response header.
     * 
     * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
     * Permission to view the content of the page and its corresponding space.
     */
    'get'(
      parameters?: Parameters<Paths.GetPageFooterComments.QueryParameters & Paths.GetPageFooterComments.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetPageFooterComments.Responses.$200>
  }
  ['/pages/{id}/inline-comments']: {
    /**
     * getPageInlineComments - Get inline comments for page
     * 
     * Returns the root inline comments of specific page. The number of results is limited by the `limit` parameter and additional results (if available)
     * will be available through the `next` URL present in the `Link` response header.
     * 
     * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
     * Permission to view the content of the page and its corresponding space.
     */
    'get'(
      parameters?: Parameters<Paths.GetPageInlineComments.QueryParameters & Paths.GetPageInlineComments.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetPageInlineComments.Responses.$200>
  }
  ['/blogposts/{id}/footer-comments']: {
    /**
     * getBlogPostFooterComments - Get footer comments for blog post
     * 
     * Returns the root footer comments of specific blog post. The number of results is limited by the `limit` parameter and additional results (if available)
     * will be available through the `next` URL present in the `Link` response header.
     * 
     * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
     * Permission to view the content of the blog post and its corresponding space.
     */
    'get'(
      parameters?: Parameters<Paths.GetBlogPostFooterComments.QueryParameters & Paths.GetBlogPostFooterComments.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetBlogPostFooterComments.Responses.$200>
  }
  ['/blogposts/{id}/inline-comments']: {
    /**
     * getBlogPostInlineComments - Get inline comments for blog post
     * 
     * Returns the root inline comments of specific blog post. The number of results is limited by the `limit` parameter and additional results (if available)
     * will be available through the `next` URL present in the `Link` response header.
     * 
     * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
     * Permission to view the content of the blog post and its corresponding space.
     */
    'get'(
      parameters?: Parameters<Paths.GetBlogPostInlineComments.QueryParameters & Paths.GetBlogPostInlineComments.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetBlogPostInlineComments.Responses.$200>
  }
  ['/footer-comments']: {
    /**
     * getFooterComments - Get footer comments
     * 
     * Returns all footer comments. The number of results is limited by the `limit` parameter and additional results (if available)
     * will be available through the `next` URL present in the `Link` response header.
     * 
     * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
     * Permission to view the content of the container and its corresponding space.
     */
    'get'(
      parameters?: Parameters<Paths.GetFooterComments.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetFooterComments.Responses.$200>
    /**
     * createFooterComment - Create footer comment
     * 
     * Create a footer comment.
     * 
     * The footer comment can be made against several locations: 
     * - at the top level (specifying pageId or blogPostId in the request body)
     * - as a reply (specifying parentCommentId in the request body)
     * - against an attachment (note: this is different than the comments added via the attachment properties page on the UI, which are referred to as version comments)
     * - against a custom content
     * 
     * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
     * Permission to view the content of the page or blogpost and its corresponding space. Permission to create comments in the space.
     */
    'post'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.CreateFooterComment.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.CreateFooterComment.Responses.$201>
  }
  ['/footer-comments/{comment-id}']: {
    /**
     * getFooterCommentById - Get footer comment by id
     * 
     * Retrieves a footer comment by id
     * 
     * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
     * Permission to view the content of the container and its corresponding space.
     */
    'get'(
      parameters?: Parameters<Paths.GetFooterCommentById.QueryParameters & Paths.GetFooterCommentById.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetFooterCommentById.Responses.$200>
    /**
     * updateFooterComment - Update footer comment
     * 
     * Update a footer comment. This can be used to update the body text of a comment.
     * 
     * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
     * Permission to view the content of the page or blogpost and its corresponding space. Permission to create comments in the space.
     */
    'put'(
      parameters?: Parameters<Paths.UpdateFooterComment.PathParameters> | null,
      data?: Paths.UpdateFooterComment.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.UpdateFooterComment.Responses.$200>
    /**
     * deleteFooterComment - Delete footer comment
     * 
     * Deletes a footer comment. This is a permanent deletion and cannot be reverted.
     * 
     * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
     * Permission to view the content of the page or blogpost and its corresponding space. Permission to delete comments in the space.
     */
    'delete'(
      parameters?: Parameters<Paths.DeleteFooterComment.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.DeleteFooterComment.Responses.$204>
  }
  ['/footer-comments/{id}/children']: {
    /**
     * getFooterCommentChildren - Get children footer comments
     * 
     * Returns the children footer comments of specific comment. The number of results is limited by the `limit` parameter and additional results (if available)
     * will be available through the `next` URL present in the `Link` response header.
     * 
     * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
     * Permission to view the content of the page and its corresponding space.
     */
    'get'(
      parameters?: Parameters<Paths.GetFooterCommentChildren.QueryParameters & Paths.GetFooterCommentChildren.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetFooterCommentChildren.Responses.$200>
  }
  ['/footer-comments/{id}/likes/count']: {
    /**
     * getFooterLikeCount - Get like count for footer comment
     * 
     * Returns the count of likes of specific footer comment.
     * 
     * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
     * Permission to view the content of the page/blogpost and its corresponding space.
     */
    'get'(
      parameters?: Parameters<Paths.GetFooterLikeCount.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetFooterLikeCount.Responses.$200>
  }
  ['/footer-comments/{id}/likes/users']: {
    /**
     * getFooterLikeUsers - Get account IDs of likes for footer comment
     * 
     * Returns the account IDs of likes of specific footer comment.
     * 
     * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
     * Permission to view the content of the page/blogpost and its corresponding space.
     */
    'get'(
      parameters?: Parameters<Paths.GetFooterLikeUsers.QueryParameters & Paths.GetFooterLikeUsers.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetFooterLikeUsers.Responses.$200>
  }
  ['/footer-comments/{id}/operations']: {
    /**
     * getFooterCommentOperations - Get permitted operations for footer comment
     * 
     * Returns the permitted operations on specific footer comment.
     * 
     * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
     * Permission to view the parent content of the footer comment and its corresponding space.
     */
    'get'(
      parameters?: Parameters<Paths.GetFooterCommentOperations.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetFooterCommentOperations.Responses.$200>
  }
  ['/footer-comments/{id}/versions']: {
    /**
     * getFooterCommentVersions - Get footer comment versions
     * 
     * Retrieves the versions of the specified footer comment.
     * 
     * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
     * Permission to view the content of the page or blog post and its corresponding space.
     */
    'get'(
      parameters?: Parameters<Paths.GetFooterCommentVersions.QueryParameters & Paths.GetFooterCommentVersions.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetFooterCommentVersions.Responses.$200>
  }
  ['/footer-comments/{id}/versions/{version-number}']: {
    /**
     * getFooterCommentVersionDetails - Get version details for footer comment version
     * 
     * Retrieves version details for the specified footer comment version.
     * 
     * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
     * Permission to view the content of the page or blog post and its corresponding space.
     */
    'get'(
      parameters?: Parameters<Paths.GetFooterCommentVersionDetails.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetFooterCommentVersionDetails.Responses.$200>
  }
  ['/inline-comments']: {
    /**
     * getInlineComments - Get inline comments
     * 
     * Returns all inline comments. The number of results is limited by the `limit` parameter and additional results (if available)
     * will be available through the `next` URL present in the `Link` response header.
     * 
     * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
     * Permission to view the content of the page and its corresponding space.
     */
    'get'(
      parameters?: Parameters<Paths.GetInlineComments.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetInlineComments.Responses.$200>
    /**
     * createInlineComment - Create inline comment
     * 
     * Create an inline comment. This can be at the top level (specifying pageId or blogPostId in the request body)
     * or as a reply (specifying parentCommentId in the request body). Note the inlineCommentProperties object in the
     * request body is used to select the text the inline comment should be tied to. This is what determines the text 
     * highlighting when viewing a page in Confluence.
     * 
     * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
     * Permission to view the content of the page or blogpost and its corresponding space. Permission to create comments in the space.
     */
    'post'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.CreateInlineComment.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.CreateInlineComment.Responses.$201>
  }
  ['/inline-comments/{comment-id}']: {
    /**
     * getInlineCommentById - Get inline comment by id
     * 
     * Retrieves an inline comment by id
     * 
     * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
     * Permission to view the content of the page or blogpost and its corresponding space.
     */
    'get'(
      parameters?: Parameters<Paths.GetInlineCommentById.QueryParameters & Paths.GetInlineCommentById.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetInlineCommentById.Responses.$200>
    /**
     * updateInlineComment - Update inline comment
     * 
     * Update an inline comment. This can be used to update the body text of a comment and/or to resolve the comment
     * 
     * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
     * Permission to view the content of the page or blogpost and its corresponding space. Permission to create comments in the space.
     */
    'put'(
      parameters?: Parameters<Paths.UpdateInlineComment.PathParameters> | null,
      data?: Paths.UpdateInlineComment.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.UpdateInlineComment.Responses.$200>
    /**
     * deleteInlineComment - Delete inline comment
     * 
     * Deletes an inline comment. This is a permanent deletion and cannot be reverted.
     * 
     * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
     * Permission to view the content of the page or blogpost and its corresponding space. Permission to delete comments in the space.
     */
    'delete'(
      parameters?: Parameters<Paths.DeleteInlineComment.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.DeleteInlineComment.Responses.$204>
  }
  ['/inline-comments/{id}/children']: {
    /**
     * getInlineCommentChildren - Get children inline comments
     * 
     * Returns the children inline comments of specific comment. The number of results is limited by the `limit` parameter and additional results (if available)
     * will be available through the `next` URL present in the `Link` response header.
     * 
     * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
     * Permission to view the content of the page and its corresponding space.
     */
    'get'(
      parameters?: Parameters<Paths.GetInlineCommentChildren.QueryParameters & Paths.GetInlineCommentChildren.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetInlineCommentChildren.Responses.$200>
  }
  ['/inline-comments/{id}/likes/count']: {
    /**
     * getInlineLikeCount - Get like count for inline comment
     * 
     * Returns the count of likes of specific inline comment.
     * 
     * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
     * Permission to view the content of the page/blogpost and its corresponding space.
     */
    'get'(
      parameters?: Parameters<Paths.GetInlineLikeCount.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetInlineLikeCount.Responses.$200>
  }
  ['/inline-comments/{id}/likes/users']: {
    /**
     * getInlineLikeUsers - Get account IDs of likes for inline comment
     * 
     * Returns the account IDs of likes of specific inline comment.
     * 
     * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
     * Permission to view the content of the page/blogpost and its corresponding space.
     */
    'get'(
      parameters?: Parameters<Paths.GetInlineLikeUsers.QueryParameters & Paths.GetInlineLikeUsers.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetInlineLikeUsers.Responses.$200>
  }
  ['/inline-comments/{id}/operations']: {
    /**
     * getInlineCommentOperations - Get permitted operations for inline comment
     * 
     * Returns the permitted operations on specific inline comment.
     * 
     * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
     * Permission to view the parent content of the inline comment and its corresponding space.
     */
    'get'(
      parameters?: Parameters<Paths.GetInlineCommentOperations.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetInlineCommentOperations.Responses.$200>
  }
  ['/inline-comments/{id}/versions']: {
    /**
     * getInlineCommentVersions - Get inline comment versions
     * 
     * Retrieves the versions of the specified inline comment.
     * 
     * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
     * Permission to view the content of the page or blog post and its corresponding space.
     */
    'get'(
      parameters?: Parameters<Paths.GetInlineCommentVersions.QueryParameters & Paths.GetInlineCommentVersions.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetInlineCommentVersions.Responses.$200>
  }
  ['/inline-comments/{id}/versions/{version-number}']: {
    /**
     * getInlineCommentVersionDetails - Get version details for inline comment version
     * 
     * Retrieves version details for the specified inline comment version.
     * 
     * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
     * Permission to view the content of the page or blog post and its corresponding space.
     */
    'get'(
      parameters?: Parameters<Paths.GetInlineCommentVersionDetails.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetInlineCommentVersionDetails.Responses.$200>
  }
  ['/comments/{comment-id}/properties']: {
    /**
     * getCommentContentProperties - Get content properties for comment
     * 
     * Retrieves Content Properties attached to a specified comment.
     * 
     * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
     * Permission to view the comment.
     */
    'get'(
      parameters?: Parameters<Paths.GetCommentContentProperties.QueryParameters & Paths.GetCommentContentProperties.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetCommentContentProperties.Responses.$200>
    /**
     * createCommentProperty - Create content property for comment
     * 
     * Creates a new content property for a comment.
     * 
     * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
     * Permission to update the comment.
     */
    'post'(
      parameters?: Parameters<Paths.CreateCommentProperty.PathParameters> | null,
      data?: Paths.CreateCommentProperty.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.CreateCommentProperty.Responses.$200>
  }
  ['/comments/{comment-id}/properties/{property-id}']: {
    /**
     * getCommentContentPropertiesById - Get content property for comment by id
     * 
     * Retrieves a specific Content Property by ID that is attached to a specified comment.
     * 
     * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
     * Permission to view the comment.
     */
    'get'(
      parameters?: Parameters<Paths.GetCommentContentPropertiesById.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetCommentContentPropertiesById.Responses.$200>
    /**
     * updateCommentPropertyById - Update content property for comment by id
     * 
     * Update a content property for a comment by its id. 
     * 
     * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
     * Permission to edit the comment.
     */
    'put'(
      parameters?: Parameters<Paths.UpdateCommentPropertyById.PathParameters> | null,
      data?: Paths.UpdateCommentPropertyById.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.UpdateCommentPropertyById.Responses.$200>
    /**
     * deleteCommentPropertyById - Delete content property for comment by id
     * 
     * Deletes a content property for a comment by its id. 
     * 
     * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
     * Permission to edit the comment.
     */
    'delete'(
      parameters?: Parameters<Paths.DeleteCommentPropertyById.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.DeleteCommentPropertyById.Responses.$204>
  }
  ['/tasks']: {
    /**
     * getTasks - Get tasks
     * 
     * Returns all tasks. The number of results is limited by the `limit` parameter and additional results (if available)
     * will be available through the `next` URL present in the `Link` response header.
     * 
     * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
     * Permission to access the Confluence site ('Can use' global permission).
     * Only tasks that the user has permission to view will be returned.
     */
    'get'(
      parameters?: Parameters<Paths.GetTasks.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetTasks.Responses.$200>
  }
  ['/tasks/{id}']: {
    /**
     * getTaskById - Get task by id
     * 
     * Returns a specific task. 
     * 
     * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
     * Permission to view the containing page or blog post and its corresponding space.
     */
    'get'(
      parameters?: Parameters<Paths.GetTaskById.QueryParameters & Paths.GetTaskById.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetTaskById.Responses.$200>
    /**
     * updateTask - Update task
     * 
     * Update a task by id. This endpoint currently only supports updating task status.
     * 
     * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
     * Permission to edit the containing page or blog post and view its corresponding space.
     */
    'put'(
      parameters?: Parameters<Paths.UpdateTask.QueryParameters & Paths.UpdateTask.PathParameters> | null,
      data?: Paths.UpdateTask.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.UpdateTask.Responses.$200>
  }
  ['/pages/{id}/children']: {
    /**
     * getChildPages - Get child pages
     * 
     * Returns all child pages for given page id. The number of results is limited by the `limit` parameter and additional results (if available)
     * will be available through the `next` URL present in the `Link` response header.
     * 
     * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
     * Permission to access the Confluence site ('Can use' global permission).
     * Only pages that the user has permission to view will be returned.
     */
    'get'(
      parameters?: Parameters<Paths.GetChildPages.QueryParameters & Paths.GetChildPages.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetChildPages.Responses.$200>
  }
  ['/custom-content/{id}/children']: {
    /**
     * getChildCustomContent - Get child custom content
     * 
     * Returns all child custom content for given custom content id. The number of results is limited by the `limit` parameter and additional results (if available)
     * will be available through the `next` URL present in the `Link` response header.
     * 
     * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
     * Permission to access the Confluence site ('Can use' global permission).
     * Only custom content that the user has permission to view will be returned.
     */
    'get'(
      parameters?: Parameters<Paths.GetChildCustomContent.QueryParameters & Paths.GetChildCustomContent.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetChildCustomContent.Responses.$200>
  }
  ['/pages/{id}/direct-children']: {
    /**
     * getPageDirectChildren - Get direct children of a page
     * 
     * Returns all children for given page id in the content tree. The number of results is limited by the `limit` parameter and additional results (if available)
     * will be available through the `next` URL present in the `Link` response header.
     * 
     * The following types of content will be returned:
     * - Database
     * - Embed
     * - Folder
     * - Page
     * - Whiteboard
     * 
     * This endpoint returns minimal information about each child. To fetch more details, use a related endpoint based on the content type, such
     * as:
     * 
     * - [Get database by id](https://developer.atlassian.com/cloud/confluence/rest/v2/api-group-database/#api-databases-id-get)
     * - [Get embed by id](https://developer.atlassian.com/cloud/confluence/rest/v2/api-group-smart-link/#api-embeds-id-get)
     * - [Get folder by id](https://developer.atlassian.com/cloud/confluence/rest/v2/api-group-folder/#api-folders-id-get)
     * - [Get page by id](https://developer.atlassian.com/cloud/confluence/rest/v2/api-group-page/#api-pages-id-get)
     * - [Get whiteboard by id](https://developer.atlassian.com/cloud/confluence/rest/v2/api-group-whiteboard/#api-whiteboards-id-get).
     * 
     * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
     * Permission to access the Confluence site ('Can use' global permission).
     * Only content that the user has permission to view will be returned.
     */
    'get'(
      parameters?: Parameters<Paths.GetPageDirectChildren.QueryParameters & Paths.GetPageDirectChildren.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetPageDirectChildren.Responses.$200>
  }
  ['/pages/{id}/ancestors']: {
    /**
     * getPageAncestors - Get all ancestors of page
     * 
     * Returns all ancestors for a given page by ID in top-to-bottom order (that is, the highest ancestor is the first
     * item in the response payload). The number of results is limited by the `limit` parameter and additional results (if available)
     * will be available by calling this endpoint with the ID of first ancestor in the response payload.
     * 
     * This endpoint returns minimal information about each ancestor. To fetch more details, use a related endpoint, such
     * as [Get page by id](https://developer.atlassian.com/cloud/confluence/rest/v2/api-group-page/#api-pages-id-get).
     * 
     * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
     * Permission to access the Confluence site ('Can use' global permission).
     */
    'get'(
      parameters?: Parameters<Paths.GetPageAncestors.QueryParameters & Paths.GetPageAncestors.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetPageAncestors.Responses.$200>
  }
  ['/pages/{id}/descendants']: {
    /**
     * getPageDescendants - Get descendants of page
     * 
     * Returns descendants in the content tree for a given page by ID in top-to-bottom order (that is, the highest descendant is the first
     * item in the response payload). The number of results is limited by the `limit` parameter and additional results (if available)
     * will be available by calling this endpoint with the cursor in the response payload. There is also a `depth` parameter specifying depth
     * of descendants to be fetched.
     * 
     * The following types of content will be returned:
     * - Database
     * - Embed
     * - Folder
     * - Page
     * - Whiteboard
     * 
     * This endpoint returns minimal information about each descendant. To fetch more details, use a related endpoint based on the content type, such
     * as:
     * 
     * - [Get database by id](https://developer.atlassian.com/cloud/confluence/rest/v2/api-group-database/#api-databases-id-get)
     * - [Get embed by id](https://developer.atlassian.com/cloud/confluence/rest/v2/api-group-smart-link/#api-embeds-id-get)
     * - [Get folder by id](https://developer.atlassian.com/cloud/confluence/rest/v2/api-group-folder/#api-folders-id-get)
     * - [Get page by id](https://developer.atlassian.com/cloud/confluence/rest/v2/api-group-page/#api-pages-id-get)
     * - [Get whiteboard by id](https://developer.atlassian.com/cloud/confluence/rest/v2/api-group-whiteboard/#api-whiteboards-id-get).
     * 
     * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
     * Permission to access the Confluence site ('Can use' global permission).
     * Permission to view the page and its corresponding space
     */
    'get'(
      parameters?: Parameters<Paths.GetPageDescendants.QueryParameters & Paths.GetPageDescendants.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetPageDescendants.Responses.$200>
  }
  ['/users-bulk']: {
    /**
     * createBulkUserLookup - Create bulk user lookup using ids
     * 
     * Returns user details for the ids provided in the request body.
     * 
     * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
     * Permission to access the Confluence site ('Can use' global permission).
     * The user must be able to view user profiles in the Confluence site.
     */
    'post'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.CreateBulkUserLookup.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.CreateBulkUserLookup.Responses.$200>
  }
  ['/user/access/check-access-by-email']: {
    /**
     * checkAccessByEmail - Check site access for a list of emails
     * 
     * Returns the list of emails from the input list that do not have access to site.
     * 
     * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
     * Permission to access the Confluence site ('Can use' global permission).
     */
    'post'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.CheckAccessByEmail.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.CheckAccessByEmail.Responses.$200>
  }
  ['/user/access/invite-by-email']: {
    /**
     * inviteByEmail - Invite a list of emails to the site
     * 
     * Invite a list of emails to the site.
     * 
     * Ignores all invalid emails and no action is taken for the emails that already have access to the site.
     * 
     * <b>NOTE:</b> This API is asynchronous and may take some time to complete.
     * 
     * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
     * Permission to access the Confluence site ('Can use' global permission).
     */
    'post'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.InviteByEmail.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<any>
  }
  ['/data-policies/metadata']: {
    /**
     * getDataPolicyMetadata - Get data policy metadata for the workspace
     * 
     * Returns data policy metadata for the workspace.
     * 
     * **[Permissions](#permissions) required:**
     * Only apps can make this request.
     * Permission to access the Confluence site ('Can use' global permission).
     */
    'get'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetDataPolicyMetadata.Responses.$200>
  }
  ['/data-policies/spaces']: {
    /**
     * getDataPolicySpaces - Get spaces with data policies
     * 
     * Returns all spaces. The results will be sorted by id ascending. The number of results is limited by the `limit` parameter and
     * additional results (if available) will be available through the `next` URL present in the `Link` response header.
     * 
     * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
     * Only apps can make this request.
     * Permission to access the Confluence site ('Can use' global permission).
     * Only spaces that the app has permission to view will be returned.
     */
    'get'(
      parameters?: Parameters<Paths.GetDataPolicySpaces.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetDataPolicySpaces.Responses.$200>
  }
  ['/classification-levels']: {
    /**
     * getClassificationLevels - Get list of classification levels
     * 
     * Returns a list of [classification levels](https://developer.atlassian.com/cloud/admin/dlp/rest/intro/#Classification%20level) 
     * available.
     * 
     * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
     * 'Permission to access the Confluence site ('Can use' global permission).
     */
    'get'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetClassificationLevels.Responses.$200>
  }
  ['/spaces/{id}/classification-level/default']: {
    /**
     * getSpaceDefaultClassificationLevel - Get space default classification level
     * 
     * Returns the [default classification level](https://support.atlassian.com/security-and-access-policies/docs/what-is-a-default-classification-level/) 
     * for a specific space.
     * 
     * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
     * 'Permission to access the Confluence site ('Can use' global permission) and permission to view the space.
     */
    'get'(
      parameters?: Parameters<Paths.GetSpaceDefaultClassificationLevel.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetSpaceDefaultClassificationLevel.Responses.$200>
    /**
     * putSpaceDefaultClassificationLevel - Update space default classification level
     * 
     * Update the [default classification level](https://support.atlassian.com/security-and-access-policies/docs/what-is-a-default-classification-level/) 
     * for a specific space.
     * 
     * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
     * 'Permission to access the Confluence site ('Can use' global permission) and 'Admin' permission for the space.
     */
    'put'(
      parameters?: Parameters<Paths.PutSpaceDefaultClassificationLevel.PathParameters> | null,
      data?: Paths.PutSpaceDefaultClassificationLevel.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<any>
    /**
     * deleteSpaceDefaultClassificationLevel - Delete space default classification level
     * 
     * Returns the [default classification level](https://support.atlassian.com/security-and-access-policies/docs/what-is-a-default-classification-level/) 
     * for a specific space.
     * 
     * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
     * 'Permission to access the Confluence site ('Can use' global permission) and 'Admin' permission for the space.
     */
    'delete'(
      parameters?: Parameters<Paths.DeleteSpaceDefaultClassificationLevel.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<any>
  }
  ['/pages/{id}/classification-level']: {
    /**
     * getPageClassificationLevel - Get page classification level
     * 
     * Returns the [classification level](https://developer.atlassian.com/cloud/admin/dlp/rest/intro/#Classification%20level)
     * for a specific page.
     * 
     * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
     * 'Permission to access the Confluence site ('Can use' global permission) and permission to view the page.
     * 'Permission to edit the page is required if trying to view classification level for a draft.
     */
    'get'(
      parameters?: Parameters<Paths.GetPageClassificationLevel.QueryParameters & Paths.GetPageClassificationLevel.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetPageClassificationLevel.Responses.$200>
    /**
     * putPageClassificationLevel - Update page classification level
     * 
     * Updates the [classification level](https://developer.atlassian.com/cloud/admin/dlp/rest/intro/#Classification%20level)
     * for a specific page.
     * 
     * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
     * 'Permission to access the Confluence site ('Can use' global permission) and permission to edit the page.
     */
    'put'(
      parameters?: Parameters<Paths.PutPageClassificationLevel.PathParameters> | null,
      data?: Paths.PutPageClassificationLevel.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.PutPageClassificationLevel.Responses.$204>
  }
  ['/pages/{id}/classification-level/reset']: {
    /**
     * postPageClassificationLevel - Reset page classification level
     * 
     * Resets the [classification level](https://developer.atlassian.com/cloud/admin/dlp/rest/intro/#Classification%20level)
     * for a specific page for the space 
     * [default classification level](https://support.atlassian.com/security-and-access-policies/docs/what-is-a-default-classification-level/).
     * 
     * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
     * 'Permission to access the Confluence site ('Can use' global permission) and permission to view the page.
     */
    'post'(
      parameters?: Parameters<Paths.PostPageClassificationLevel.PathParameters> | null,
      data?: Paths.PostPageClassificationLevel.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.PostPageClassificationLevel.Responses.$204>
  }
  ['/blogposts/{id}/classification-level']: {
    /**
     * getBlogPostClassificationLevel - Get blog post classification level
     * 
     * Returns the [classification level](https://developer.atlassian.com/cloud/admin/dlp/rest/intro/#Classification%20level)
     * for a specific blog post.
     * 
     * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
     * 'Permission to access the Confluence site ('Can use' global permission) and permission to view the blog post.
     * 'Permission to edit the blog post is required if trying to view classification level for a draft.
     */
    'get'(
      parameters?: Parameters<Paths.GetBlogPostClassificationLevel.QueryParameters & Paths.GetBlogPostClassificationLevel.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetBlogPostClassificationLevel.Responses.$200>
    /**
     * putBlogPostClassificationLevel - Update blog post classification level
     * 
     * Updates the [classification level](https://developer.atlassian.com/cloud/admin/dlp/rest/intro/#Classification%20level)
     * for a specific blog post.
     * 
     * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
     * 'Permission to access the Confluence site ('Can use' global permission) and permission to edit the blog post.
     */
    'put'(
      parameters?: Parameters<Paths.PutBlogPostClassificationLevel.PathParameters> | null,
      data?: Paths.PutBlogPostClassificationLevel.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.PutBlogPostClassificationLevel.Responses.$204>
  }
  ['/blogposts/{id}/classification-level/reset']: {
    /**
     * postBlogPostClassificationLevel - Reset blog post classification level
     * 
     * Resets the [classification level](https://developer.atlassian.com/cloud/admin/dlp/rest/intro/#Classification%20level)
     * for a specific blog post for the space  
     * [default classification level](https://support.atlassian.com/security-and-access-policies/docs/what-is-a-default-classification-level/).
     * 
     * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
     * 'Permission to access the Confluence site ('Can use' global permission) and permission to view the blog post.
     */
    'post'(
      parameters?: Parameters<Paths.PostBlogPostClassificationLevel.PathParameters> | null,
      data?: Paths.PostBlogPostClassificationLevel.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.PostBlogPostClassificationLevel.Responses.$204>
  }
  ['/whiteboards/{id}/classification-level']: {
    /**
     * getWhiteboardClassificationLevel - Get whiteboard classification level
     * 
     * Returns the [classification level](https://developer.atlassian.com/cloud/admin/dlp/rest/intro/#Classification%20level)
     * for a specific whiteboard.
     * 
     * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
     * 'Permission to access the Confluence site ('Can use' global permission) and permission to view the whiteboard.
     */
    'get'(
      parameters?: Parameters<Paths.GetWhiteboardClassificationLevel.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetWhiteboardClassificationLevel.Responses.$200>
    /**
     * putWhiteboardClassificationLevel - Update whiteboard classification level
     * 
     * Updates the [classification level](https://developer.atlassian.com/cloud/admin/dlp/rest/intro/#Classification%20level)
     * for a specific whiteboard.
     * 
     * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
     * 'Permission to access the Confluence site ('Can use' global permission) and permission to edit the whiteboard.
     */
    'put'(
      parameters?: Parameters<Paths.PutWhiteboardClassificationLevel.PathParameters> | null,
      data?: Paths.PutWhiteboardClassificationLevel.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.PutWhiteboardClassificationLevel.Responses.$204>
  }
  ['/whiteboards/{id}/classification-level/reset']: {
    /**
     * postWhiteboardClassificationLevel - Reset whiteboard classification level
     * 
     * Resets the [classification level](https://developer.atlassian.com/cloud/admin/dlp/rest/intro/#Classification%20level)
     * for a specific whiteboard for the space 
     * [default classification level](https://support.atlassian.com/security-and-access-policies/docs/what-is-a-default-classification-level/).
     * 
     * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
     * 'Permission to access the Confluence site ('Can use' global permission) and permission to view the whiteboard.
     */
    'post'(
      parameters?: Parameters<Paths.PostWhiteboardClassificationLevel.PathParameters> | null,
      data?: Paths.PostWhiteboardClassificationLevel.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.PostWhiteboardClassificationLevel.Responses.$204>
  }
  ['/databases/{id}/classification-level']: {
    /**
     * getDatabaseClassificationLevel - Get database classification level
     * 
     * Returns the [classification level](https://developer.atlassian.com/cloud/admin/dlp/rest/intro/#Classification%20level)
     * for a specific database.
     * 
     * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
     * 'Permission to access the Confluence site ('Can use' global permission) and permission to view the database.
     */
    'get'(
      parameters?: Parameters<Paths.GetDatabaseClassificationLevel.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetDatabaseClassificationLevel.Responses.$200>
    /**
     * putDatabaseClassificationLevel - Update database classification level
     * 
     * Updates the [classification level](https://developer.atlassian.com/cloud/admin/dlp/rest/intro/#Classification%20level)
     * for a specific database.
     * 
     * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
     * 'Permission to access the Confluence site ('Can use' global permission) and permission to edit the database.
     */
    'put'(
      parameters?: Parameters<Paths.PutDatabaseClassificationLevel.PathParameters> | null,
      data?: Paths.PutDatabaseClassificationLevel.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.PutDatabaseClassificationLevel.Responses.$204>
  }
  ['/databases/{id}/classification-level/reset']: {
    /**
     * postDatabaseClassificationLevel - Reset database classification level
     * 
     * Resets the [classification level](https://developer.atlassian.com/cloud/admin/dlp/rest/intro/#Classification%20level)
     * for a specific database for the space 
     * [default classification level](https://support.atlassian.com/security-and-access-policies/docs/what-is-a-default-classification-level/).
     * 
     * **[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
     * 'Permission to access the Confluence site ('Can use' global permission) and permission to view the database.
     */
    'post'(
      parameters?: Parameters<Paths.PostDatabaseClassificationLevel.PathParameters> | null,
      data?: Paths.PostDatabaseClassificationLevel.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.PostDatabaseClassificationLevel.Responses.$204>
  }
  ['/app/properties']: {
    /**
     * getForgeAppProperties - Get Forge app properties.
     * 
     * Gets Forge app properties. This API can only be accessed using **[asApp()](https://developer.atlassian.com/platform/forge/apis-reference/fetch-api-product.requestconfluence/#method-signature)** requests from Forge.
     */
    'get'(
      parameters?: Parameters<Paths.GetForgeAppProperties.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetForgeAppProperties.Responses.$200>
  }
  ['/app/properties/{propertyKey}']: {
    /**
     * getForgeAppProperty - Get a Forge app property by key.
     * 
     * Gets a Forge app property by property key. This API can only be accessed using **[asApp()](https://developer.atlassian.com/platform/forge/apis-reference/fetch-api-product.requestconfluence/#method-signature)** requests from Forge.
     */
    'get'(
      parameters?: Parameters<Paths.GetForgeAppProperty.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetForgeAppProperty.Responses.$200>
    /**
     * putForgeAppProperty - Create or update a Forge app property.
     * 
     * Creates or updates a Forge app property. This API can only be accessed using **[asApp()](https://developer.atlassian.com/platform/forge/apis-reference/fetch-api-product.requestconfluence/#method-signature)** requests from Forge.
     */
    'put'(
      parameters?: Parameters<Paths.PutForgeAppProperty.PathParameters> | null,
      data?: Paths.PutForgeAppProperty.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.PutForgeAppProperty.Responses.$200 | Paths.PutForgeAppProperty.Responses.$201>
    /**
     * deleteForgeAppProperty - Deletes a Forge app property.
     * 
     * Deletes a Forge app property. This API can only be accessed using **[asApp()](https://developer.atlassian.com/platform/forge/apis-reference/fetch-api-product.requestconfluence/#method-signature)** requests from Forge.
     */
    'delete'(
      parameters?: Parameters<Paths.DeleteForgeAppProperty.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.DeleteForgeAppProperty.Responses.$204>
  }
}

export type Client = OpenAPIClient<OperationMethods, PathsDictionary>


export type AbstractPageLinks = Components.Schemas.AbstractPageLinks;
export type AccountStatus = Components.Schemas.AccountStatus;
export type AccountType = Components.Schemas.AccountType;
export type AdminKeyResponse = Components.Schemas.AdminKeyResponse;
export type Ancestor = Components.Schemas.Ancestor;
export type AncestorType = Components.Schemas.AncestorType;
export type AttachmentBulk = Components.Schemas.AttachmentBulk;
export type AttachmentCommentModel = Components.Schemas.AttachmentCommentModel;
export type AttachmentLinks = Components.Schemas.AttachmentLinks;
export type AttachmentSingle = Components.Schemas.AttachmentSingle;
export type AttachmentSortOrder = Components.Schemas.AttachmentSortOrder;
export type AttachmentVersion = Components.Schemas.AttachmentVersion;
export type BlogPostBodyWrite = Components.Schemas.BlogPostBodyWrite;
export type BlogPostBulk = Components.Schemas.BlogPostBulk;
export type BlogPostCommentModel = Components.Schemas.BlogPostCommentModel;
export type BlogPostContentStatus = Components.Schemas.BlogPostContentStatus;
export type BlogPostInlineCommentModel = Components.Schemas.BlogPostInlineCommentModel;
export type BlogPostNestedBodyWrite = Components.Schemas.BlogPostNestedBodyWrite;
export type BlogPostSingle = Components.Schemas.BlogPostSingle;
export type BlogPostSortOrder = Components.Schemas.BlogPostSortOrder;
export type BlogPostVersion = Components.Schemas.BlogPostVersion;
export type BodyBulk = Components.Schemas.BodyBulk;
export type BodySingle = Components.Schemas.BodySingle;
export type BodyType = Components.Schemas.BodyType;
export type ChildCustomContent = Components.Schemas.ChildCustomContent;
export type ChildCustomContentSortOrder = Components.Schemas.ChildCustomContentSortOrder;
export type ChildPage = Components.Schemas.ChildPage;
export type ChildPageSortOrder = Components.Schemas.ChildPageSortOrder;
export type ChildrenCommentModel = Components.Schemas.ChildrenCommentModel;
export type ChildrenResponse = Components.Schemas.ChildrenResponse;
export type ClassificationLevel = Components.Schemas.ClassificationLevel;
export type ClassificationLevelColor = Components.Schemas.ClassificationLevelColor;
export type ClassificationLevelStatus = Components.Schemas.ClassificationLevelStatus;
export type CommentBodyWrite = Components.Schemas.CommentBodyWrite;
export type CommentLinks = Components.Schemas.CommentLinks;
export type CommentNestedBodyWrite = Components.Schemas.CommentNestedBodyWrite;
export type CommentSortOrder = Components.Schemas.CommentSortOrder;
export type CommentVersion = Components.Schemas.CommentVersion;
export type ContentIdToContentTypeResponse = Components.Schemas.ContentIdToContentTypeResponse;
export type ContentProperty = Components.Schemas.ContentProperty;
export type ContentPropertyCreateRequest = Components.Schemas.ContentPropertyCreateRequest;
export type ContentPropertySortOrder = Components.Schemas.ContentPropertySortOrder;
export type ContentPropertyUpdateRequest = Components.Schemas.ContentPropertyUpdateRequest;
export type ContentSortOrder = Components.Schemas.ContentSortOrder;
export type ContentStatus = Components.Schemas.ContentStatus;
export type CreateFooterCommentModel = Components.Schemas.CreateFooterCommentModel;
export type CreateInlineCommentModel = Components.Schemas.CreateInlineCommentModel;
export type CustomContentBodyBulk = Components.Schemas.CustomContentBodyBulk;
export type CustomContentBodyRepresentation = Components.Schemas.CustomContentBodyRepresentation;
export type CustomContentBodyRepresentationSingle = Components.Schemas.CustomContentBodyRepresentationSingle;
export type CustomContentBodySingle = Components.Schemas.CustomContentBodySingle;
export type CustomContentBodyWrite = Components.Schemas.CustomContentBodyWrite;
export type CustomContentBulk = Components.Schemas.CustomContentBulk;
export type CustomContentCommentModel = Components.Schemas.CustomContentCommentModel;
export type CustomContentLinks = Components.Schemas.CustomContentLinks;
export type CustomContentNestedBodyWrite = Components.Schemas.CustomContentNestedBodyWrite;
export type CustomContentSingle = Components.Schemas.CustomContentSingle;
export type CustomContentSortOrder = Components.Schemas.CustomContentSortOrder;
export type CustomContentVersion = Components.Schemas.CustomContentVersion;
export type DataPolicyMetadata = Components.Schemas.DataPolicyMetadata;
export type DataPolicySpace = Components.Schemas.DataPolicySpace;
export type DatabaseLinks = Components.Schemas.DatabaseLinks;
export type DatabaseSingle = Components.Schemas.DatabaseSingle;
export type DeleteSpaceRoleResponse = Components.Schemas.DeleteSpaceRoleResponse;
export type DescendantsResponse = Components.Schemas.DescendantsResponse;
export type DetailedVersion = Components.Schemas.DetailedVersion;
export type FolderLinks = Components.Schemas.FolderLinks;
export type FolderSingle = Components.Schemas.FolderSingle;
export type FooterCommentModel = Components.Schemas.FooterCommentModel;
export type Icon = Components.Schemas.Icon;
export type InlineCommentChildrenModel = Components.Schemas.InlineCommentChildrenModel;
export type InlineCommentModel = Components.Schemas.InlineCommentModel;
export type InlineCommentProperties = Components.Schemas.InlineCommentProperties;
export type InlineCommentResolutionStatus = Components.Schemas.InlineCommentResolutionStatus;
export type Label = Components.Schemas.Label;
export type LabelSortOrder = Components.Schemas.LabelSortOrder;
export type Like = Components.Schemas.Like;
export type MultiEntityLinks = Components.Schemas.MultiEntityLinks;
export type OnlyArchivedAndCurrentContentStatus = Components.Schemas.OnlyArchivedAndCurrentContentStatus;
export type Operation = Components.Schemas.Operation;
export type OptionalFieldLinks = Components.Schemas.OptionalFieldLinks;
export type OptionalFieldMeta = Components.Schemas.OptionalFieldMeta;
export type PageBodyWrite = Components.Schemas.PageBodyWrite;
export type PageBulk = Components.Schemas.PageBulk;
export type PageCommentModel = Components.Schemas.PageCommentModel;
export type PageInlineCommentModel = Components.Schemas.PageInlineCommentModel;
export type PageNestedBodyWrite = Components.Schemas.PageNestedBodyWrite;
export type PageSingle = Components.Schemas.PageSingle;
export type PageSortOrder = Components.Schemas.PageSortOrder;
export type PageVersion = Components.Schemas.PageVersion;
export type ParentContentType = Components.Schemas.ParentContentType;
export type PermittedOperationsResponse = Components.Schemas.PermittedOperationsResponse;
export type PrimaryBodyRepresentation = Components.Schemas.PrimaryBodyRepresentation;
export type PrimaryBodyRepresentationSingle = Components.Schemas.PrimaryBodyRepresentationSingle;
export type Principal = Components.Schemas.Principal;
export type PrincipalType = Components.Schemas.PrincipalType;
export type Redaction = Components.Schemas.Redaction;
export type RedactionPointer = Components.Schemas.RedactionPointer;
export type RedactionPointerResponse = Components.Schemas.RedactionPointerResponse;
export type RedactionResponse = Components.Schemas.RedactionResponse;
export type RedactionSectionResponse = Components.Schemas.RedactionSectionResponse;
export type RoleType = Components.Schemas.RoleType;
export type SmartLinkLinks = Components.Schemas.SmartLinkLinks;
export type SmartLinkSingle = Components.Schemas.SmartLinkSingle;
export type SpaceBulk = Components.Schemas.SpaceBulk;
export type SpaceDescription = Components.Schemas.SpaceDescription;
export type SpaceDescriptionBodyRepresentation = Components.Schemas.SpaceDescriptionBodyRepresentation;
export type SpaceIcon = Components.Schemas.SpaceIcon;
export type SpaceLinks = Components.Schemas.SpaceLinks;
export type SpacePermission = Components.Schemas.SpacePermission;
export type SpacePermissionAssignment = Components.Schemas.SpacePermissionAssignment;
export type SpaceProperty = Components.Schemas.SpaceProperty;
export type SpacePropertyCreateRequest = Components.Schemas.SpacePropertyCreateRequest;
export type SpacePropertyUpdateRequest = Components.Schemas.SpacePropertyUpdateRequest;
export type SpaceRole = Components.Schemas.SpaceRole;
export type SpaceRoleAssignment = Components.Schemas.SpaceRoleAssignment;
export type SpaceSingle = Components.Schemas.SpaceSingle;
export type SpaceSortOrder = Components.Schemas.SpaceSortOrder;
export type SpaceStatus = Components.Schemas.SpaceStatus;
export type SpaceType = Components.Schemas.SpaceType;
export type Task = Components.Schemas.Task;
export type TaskBodySingle = Components.Schemas.TaskBodySingle;
export type UpdateFooterCommentModel = Components.Schemas.UpdateFooterCommentModel;
export type UpdateInlineCommentModel = Components.Schemas.UpdateInlineCommentModel;
export type UpdateSpaceRoleResponse = Components.Schemas.UpdateSpaceRoleResponse;
export type User = Components.Schemas.User;
export type Version = Components.Schemas.Version;
export type VersionSortOrder = Components.Schemas.VersionSortOrder;
export type VersionedEntity = Components.Schemas.VersionedEntity;
export type WhiteboardLinks = Components.Schemas.WhiteboardLinks;
export type WhiteboardSingle = Components.Schemas.WhiteboardSingle;
